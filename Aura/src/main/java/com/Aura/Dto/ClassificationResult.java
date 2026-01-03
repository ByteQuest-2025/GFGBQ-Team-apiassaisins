package com.Aura.Dto;

public class ClassificationResult {
    
    private String Location;
    private String category;
    private String severity;

    //getrs and strs
    public String getLocation() {
        return Location;
    }
    public void setLocation(String location) {
        Location = location;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public String getSeverity() {
        return severity;
    }
    public void setSeverity(String severity) {
        this.severity = severity;
    }

     
    
}
