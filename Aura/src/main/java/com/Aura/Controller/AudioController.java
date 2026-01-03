package com.Aura.Controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.Aura.Dto.ComplaintRequest;
import com.Aura.Dto.ComplaintResponse;
import com.Aura.Service.ComplaintService;
import com.Aura.Service.SpeechToTextService;

@RestController

public class AudioController {
     private final SpeechToTextService speechservice;
    private final ComplaintService complaintservice;

    
    public AudioController(SpeechToTextService speechservice, ComplaintService complaintservice) {
        this.speechservice = speechservice;
        this.complaintservice = complaintservice;
    }


    @PostMapping("/audio")
    public ComplaintResponse submitAudioComplaint(@RequestParam MultipartFile audioFile) {
        String text = speechservice.transcribe(audioFile);
        return complaintservice.submitresponse(new ComplaintRequest(text, null, null));
    }

    
}
