package com.Aura.Service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class VisionService {
    public String extractTextOrLabels(MultipartFile imageFile) {
        
        return "Detected issue from image"; // placeholder
    }

    
}
