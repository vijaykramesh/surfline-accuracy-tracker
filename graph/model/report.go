package model

type NewReport struct {
	Email            string            `json:"email"`
	SurflineSiteID   string            `json:"surflineSiteId"`
	SurflineRating   *SurflineRating   `json:"surflineRating,omitempty"`
	ReportRating     ReportRating      `json:"reportRating"`
	AccuracyEstimate *AccuracyEstimate `json:"accuracyEstimate,omitempty"`
	Timestamp        int               `json:"timestamp"`
}

type Report struct {
	ID               string            `json:"id"`
	Email            string            `json:"email"`
	SurflineSiteID   string            `json:"surflineSite"`
	SurflineSite     *SurflineSite     `json:"surflineSite,omitempty"`
	SurflineRating   *SurflineRating   `json:"surflineRating,omitempty"`
	ReportRating     ReportRating      `json:"reportRating"`
	AccuracyEstimate *AccuracyEstimate `json:"accuracyEstimate,omitempty"`
	Timestamp        int               `json:"timestamp"`
}
