package com.Aura.Controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.Aura.Dto.ComplaintRequest;
import com.Aura.Dto.ComplaintResponse;
import com.Aura.Service.ComplaintService;
import com.Aura.Service.VisionService;

@RestController
@RequestMapping("/complaint")
public class ImageController {
     private final VisionService visionService;
    private final ComplaintService complaintService;

    public ImageController(VisionService visionService, ComplaintService complaintService) {
        this.visionService = visionService;
        this.complaintService = complaintService;
    }

    @PostMapping("/image")
    public ComplaintResponse submitImageComplaint(@RequestParam("file") MultipartFile imageFile,
                                                  @RequestParam("citizenId") String citizenId) {
        String description = visionService.extractTextOrLabels(imageFile);

        ComplaintRequest request = new ComplaintRequest(description, null, null, "AUTO");//errro
        return complaintService.submitresponse(request);
    }

    
}
