package com.Aura.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Aura.Dto.ComplaintRequest;
import com.Aura.Dto.ComplaintResponse;
import com.Aura.Service.ComplaintService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/complaint")
public class ComplaintController {

    private final ComplaintService complaintservice;

     //constructor
    public ComplaintController(ComplaintService complaintservice) {
        this.complaintservice = complaintservice;
    }

    //post complaint
    @PostMapping
    public ComplaintResponse submitrResponse(@RequestBody ComplaintRequest request) {
        return complaintservice.submitresponse(request);
    }

    //get complaint
    @GetMapping("/{id}/status")
    public ComplaintResponse getstatus(@PathVariable Long id){
        return complaintservice.getstatus(id);
    }
    
    

   
    
    
}
