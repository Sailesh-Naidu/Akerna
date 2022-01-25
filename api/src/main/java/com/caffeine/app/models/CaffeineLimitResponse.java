package com.caffeine.app.models;

public class CaffeineLimitResponse {

    private String alert;

    private String message;

    public CaffeineLimitResponse() {
    }

    public CaffeineLimitResponse(String alert, String message) {
        this.alert = alert;
        this.message = message;
    }

    public String getAlert() {
        return alert;
    }

    public void setAlert(String alert) {
        this.alert = alert;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
