package model

type NewSurflineSite struct {
	SurflineID string `json:"surflineId"`
	Name       string `json:"name"`
	URL        string `json:"url"`
}

type SurflineSite struct {
	ID         string `json:"id"`
	SurflineID string `json:"surflineId"`
	Name       string `json:"name"`
	URL        string `json:"url"`
}
