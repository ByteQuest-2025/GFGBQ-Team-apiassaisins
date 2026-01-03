package com.Aura.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import com.Aura.Dto.ComplaintRequest;
import com.Aura.Dto.ComplaintResponse;
import com.Aura.Model.Complaint;
import com.Aura.Repository.ComplaintRepo;
import com.Aura.Service.ComplaintService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/complaint")
public class ComplaintController {

    private final ComplaintService complaintservice;
    private final ComplaintRepo complaintrepo;

    // constructor
    public ComplaintController(ComplaintService complaintservice, ComplaintRepo complaintrepo) {
        this.complaintservice = complaintservice;
        this.complaintrepo = complaintrepo;
    }

    // post complaint
    @PostMapping
    public ComplaintResponse submitrResponse(@RequestBody ComplaintRequest request) {
        return complaintservice.submitresponse(request);
    }

    // update complaint status
    @PutMapping("/{id}/status")
    public ComplaintResponse updateStatus(@PathVariable Long id, @RequestParam String status) {
        Complaint complaint = complaintrepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Complaint not found"));
        complaint.setStatus(status);
        Complaint saved = complaintrepo.save(complaint);
        return mapToResponse(saved); 
    }

    // Test Gemini integration directly
    @GetMapping("/test")
    public String testGemini(@RequestParam String description) {
        return "AI Result: " + complaintservice
                .submitresponse(new ComplaintRequest(description, null, null))
                .getCategory();
    }

    // get all complaints
    @GetMapping("/all")
    public List<ComplaintResponse> getAllComplaints() {
        return complaintrepo.findAll()
                .stream()
                .map(this::mapToResponse) 
                .toList();
    }

    // filter complaints
    @GetMapping("/filter")
    public List<ComplaintResponse> filterComplaints(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String severity) 

            {
        return complaintrepo.findAll()
                .stream()
                .filter(c -> status == null || c.getStatus().equalsIgnoreCase(status))
                .filter(c -> category == null || c.getCategory().equalsIgnoreCase(category))
                .filter(c -> severity == null || c.getSeverity().equalsIgnoreCase(severity)) 
                .map(this::mapToResponse) 
                .toList();
    }

    private ComplaintResponse mapToResponse(Complaint complaint) {
        ComplaintResponse response = new ComplaintResponse();
        response.setId(complaint.getId());
        response.setDescription(complaint.getDescription());
        response.setLocation(complaint.getLocation());
        response.setCategory(complaint.getCategory());
        response.setSeverity(complaint.getSeverity());
        response.setStatus(complaint.getStatus());
        return response;
    }
}
