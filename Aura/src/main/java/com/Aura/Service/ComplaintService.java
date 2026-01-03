package com.Aura.Service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.Aura.Dto.ClassificationResult;
import com.Aura.Dto.ComplaintRequest;
import com.Aura.Dto.ComplaintResponse;
import com.Aura.Model.Complaint;
import com.Aura.Repository.ComplaintRepo;

@Service
public class ComplaintService {
    private final ComplaintRepo complaintrepo;
    private final AiClassifier aiclassifier;
    
    //create a constructor for this
    public ComplaintService(ComplaintRepo complaintrepo, AiClassifier aiclassifier) {
        this.complaintrepo = complaintrepo;
        this.aiclassifier = aiclassifier;
    }

     
    //submit complaint
    public ComplaintResponse submitresponse(ComplaintRequest request) {
        Complaint complaint = new Complaint();
        complaint.setDescription(request.getDescription());
        complaint.setLocation(request.getLocation());
        complaint.setCategory(request.getCategory());
        complaint.setStatus("SUBMITTED");
        complaint.setCreatedBy("Citizen");
        complaint.setCreatedAt(LocalDateTime.now());

        //ai classification step
        ClassificationResult airesult = aiclassifier.classifyComplaint(request.getDescription());//ai classifer that from full red line
        if(airesult!=null) {
            if(airesult.getCategory()!=null) complaint.setCategory(airesult.getCategory());
            if(airesult.getLocation()!=null) complaint.setLocation(airesult.getLocation());
            complaint.setStatus("CLASSIFIED");
        }

        //save
        Complaint saved = complaintrepo.save(complaint);

        return mapToResponse(saved);

    }

    
    //get complaint Status
    public ComplaintResponse getstatus(Long id) {
        Complaint complaint = complaintrepo.findById(id)
                 .orElseThrow(()->new RuntimeException("complaint not found"));
        return mapToResponse(complaint);
    }

    private ComplaintResponse mapToResponse(Complaint complaint) {
        ComplaintResponse response = new ComplaintResponse();
        response.setId(complaint.getId());
        response.setDescription(complaint.getDescription());
        response.setLocation(complaint.getLocation());
        response.setCategory(complaint.getCategory());
        response.setStatus(complaint.getStatus());
        return response;
    }


    
    
}
