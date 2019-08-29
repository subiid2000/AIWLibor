import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class ContractList {
    @JsonProperty('id', String)
    id: string = undefined;
    @JsonProperty('contract_name', String)
    contract_name: string = undefined;
    @JsonProperty('contract_tag', [])
    contract_tag: string[] = undefined;
    @JsonProperty('contract_description', String)
    contract_description: string = undefined;
    @JsonProperty('created_date', String)
    created_date: string = undefined;
    @JsonProperty('status', Number)
    status: number = undefined;
    @JsonProperty('pending_count', Number)
    pending_count: number = undefined;
    @JsonProperty('completed_count', Number)
    completed_count: number = undefined;
    @JsonProperty('total_count', Number)
    total_count: number = undefined;

    get progressbar() {
        if (this.total_count !== 0) {
          return ((this.completed_count /  this.total_count) * 100) === 0 ? 8 : (this.completed_count /  this.total_count) * 100;
        } else {
          return 0;
        }
      }
}

@JsonObject
export class ContractFileList {
    @JsonProperty('id', String)
    id: string = undefined;
    @JsonProperty('filename', String)
    file_name: string = undefined;
    @JsonProperty('contract_name', String)
    contract_name: string = undefined;
    @JsonProperty('uploadDate', String)
    created_date: string = undefined;
    @JsonProperty('status', Number)
    status: number = undefined;
}

@JsonObject
export class SearchContentByContract {
    @JsonProperty('content', String)
    content: string = undefined;
    @JsonProperty('file_id', String)
    file_id: string = undefined;
    @JsonProperty('score', Number)
    score: number = undefined;
}

@JsonObject
export class ContractDashboard {
    @JsonProperty('error_count', Number)
    error_count: number = undefined;
    @JsonProperty('pending_count', Number)
    pending_count: number = undefined;
    @JsonProperty('total_count', Number)
    total_count: number = undefined;
    @JsonProperty('completed_count', Number)
    completed_count: number = undefined;

    @JsonProperty('contract_pending_count', Number)
    contract_pending_count: number = undefined;
    @JsonProperty('contract_total_count', Number)
    contract_total_count: number = undefined;
    @JsonProperty('contract_error_count', Number)
    contract_error_count: number = undefined;
    @JsonProperty('contract_completed_count', Number)
    contract_completed_count: number = undefined;

    get pending_progressbar() {
      if (this.contract_total_count !== 0) {
          return Math.round((this.contract_pending_count /  this.contract_total_count) * 100);
        } else {
          return 0;
      }
    }

    get completed_progressbar() {
      if (this.contract_total_count !== 0) {
          return Math.round((this.contract_completed_count /  this.contract_total_count) * 100);
        } else {
          return 0;
      }
    }
}
