interface SpotifyReport {
  id: number;
  client_id: string;
  update_date: Date;
  sheets_id: string;
  campaign_id: string;
  campaign_name: string;
  campaign_current_status: string;
}

export type { SpotifyReport }