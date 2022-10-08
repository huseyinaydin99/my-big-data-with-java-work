package com.xcommerce.bigdata.clickevent.model;

public class ClickRequest {

    private String deviceId;

    private String click;

    private String session;

    private String current_ts;

    private String region;

    public ClickRequest() {
    }

    public ClickRequest(String deviceId, String click, String session, String current_ts, String region) {
        this.deviceId = deviceId;
        this.click = click;
        this.session = session;
        this.current_ts = current_ts;
        this.region = region;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getCurrent_ts() {
        return current_ts;
    }

    public void setCurrent_ts(String current_ts) {
        this.current_ts = current_ts;
    }

    public String getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(String deviceId) {
        this.deviceId = deviceId;
    }

    public String getClick() {
        return click;
    }

    public void setClick(String click) {
        this.click = click;
    }

    public String getSession() {
        return session;
    }

    public void setSession(String session) {
        this.session = session;
    }
}
