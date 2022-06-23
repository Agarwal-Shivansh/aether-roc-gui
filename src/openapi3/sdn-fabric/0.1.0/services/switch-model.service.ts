// Code generated by openapi-gen. DO NOT EDIT.
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { SwitchModel } from '../models/switch-model';
import { SwitchModelList } from '../models/switch-model-list';

@Injectable({
  providedIn: 'root',
})
export class SwitchModelService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSwitchModelList
   */
  static readonly GetSwitchModelListPath = '/sdn-fabric/v0.1.x/{fabric-id}/switch-model';

  /**
   * GET /switch-model List.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSwitchModelList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSwitchModelList$Response(params: {

    /**
     * fabric-id (target in onos-config)
     */
    'fabric-id': any;
  }): Observable<StrictHttpResponse<SwitchModelList>> {

    const rb = new RequestBuilder(this.rootUrl, SwitchModelService.GetSwitchModelListPath, 'get');
    if (params) {
      rb.path('fabric-id', params['fabric-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SwitchModelList>;
      })
    );
  }

  /**
   * GET /switch-model List.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSwitchModelList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSwitchModelList(params: {

    /**
     * fabric-id (target in onos-config)
     */
    'fabric-id': any;
  }): Observable<SwitchModelList> {

    return this.getSwitchModelList$Response(params).pipe(
      map((r: StrictHttpResponse<SwitchModelList>) => r.body as SwitchModelList)
    );
  }

  /**
   * Path part for operation getSwitchModel
   */
  static readonly GetSwitchModelPath = '/sdn-fabric/v0.1.x/{fabric-id}/switch-model/{switch-model-id}';

  /**
   * GET /switch-model Container.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSwitchModel()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSwitchModel$Response(params: {

    /**
     * fabric-id (target in onos-config)
     */
    'fabric-id': any;

    /**
     * key {switch-model-id}
     */
    'switch-model-id': any;
  }): Observable<StrictHttpResponse<SwitchModel>> {

    const rb = new RequestBuilder(this.rootUrl, SwitchModelService.GetSwitchModelPath, 'get');
    if (params) {
      rb.path('fabric-id', params['fabric-id'], {});
      rb.path('switch-model-id', params['switch-model-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SwitchModel>;
      })
    );
  }

  /**
   * GET /switch-model Container.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSwitchModel$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSwitchModel(params: {

    /**
     * fabric-id (target in onos-config)
     */
    'fabric-id': any;

    /**
     * key {switch-model-id}
     */
    'switch-model-id': any;
  }): Observable<SwitchModel> {

    return this.getSwitchModel$Response(params).pipe(
      map((r: StrictHttpResponse<SwitchModel>) => r.body as SwitchModel)
    );
  }

}
