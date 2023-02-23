interface SpotifyReport {
  id: number;
  client: string;
  update_date: Date;
  sheets_id: string;
  campaign_id: string;
  campaign_name: string;
  campaign_current_status: string;
}

interface MgidReport {
  id: number;
  client: string;
  update_date: Date;
  sheets_id: string;
  campaignId: string;
}

export type { SpotifyReport, MgidReport }