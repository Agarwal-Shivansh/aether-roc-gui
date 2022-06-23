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

import { SwitchPort } from '../models/switch-port';
import { SwitchPortList } from '../models/switch-port-list';
import { SwitchPortState } from '../models/switch-port-state';
import { SwitchPortVlans } from '../models/switch-port-vlans';

@Injectable({
  providedIn: 'root',
})
export class SwitchPortService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSwitchPortList
   */
  static readonly GetSwitchPortListPath = '/sdn-fabric/v0.1.x/{fabric-id}/switch/{switch-id}/port';

  /**
   * GET /switch/{switch-id}/port List.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSwitchPortList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSwitchPortList$Response(params: {

    /**
     * fabric-id (target in onos-config)
     */
    'fabric-id': any;

    /**
     * key {switch-id}
     */
    'switch-id': any;
  }): Observable<StrictHttpResponse<SwitchPortList>> {

    const rb = new RequestBuilder(this.rootUrl, SwitchPortService.GetSwitchPortListPath, 'get');
    if (params) {
      rb.path('fabric-id', params['fabric-id'], {});
      rb.path('switch-id', params['switch-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SwitchPortList>;
      })
    );
  }

  /**
   * GET /switch/{switch-id}/port List.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSwitchPortList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSwitchPortList(params: {

    /**
     * fabric-id (target in onos-config)
     */
    'fabric-id': any;

    /**
     * key {switch-id}
     */
    'switch-id': any;
  }): Observable<SwitchPortList> {

    return this.getSwitchPortList$Response(params).pipe(
      map((r: StrictHttpResponse<SwitchPortList>) => r.body as SwitchPortList)
    );
  }

  /**
   * Path part for operation getSwitchPort
   */
  static readonly GetSwitchPortPath = '/sdn-fabric/v0.1.x/{fabric-id}/switch/{switch-id}/port/{cage-number}/{channel-number}';

  /**
   * GET /switch/{switch-id}/port Container.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSwitchPort()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSwitchPort$Response(params: {

    /**
     * fabric-id (target in onos-config)
     */
    'fabric-id': any;

    /**
     * key {switch-id}
     */
    'switch-id': any;

    /**
     * key {cage-number}
     */
    'cage-number': any;

    /**
     * key {channel-number}
     */
    'channel-number': any;
  }): Observable<StrictHttpResponse<SwitchPort>> {

    const rb = new RequestBuilder(this.rootUrl, SwitchPortService.GetSwitchPortPath, 'get');
    if (params) {
      rb.path('fabric-id', params['fabric-id'], {});
      rb.path('switch-id', params['switch-id'], {});
      rb.path('cage-number', params['cage-number'], {});
      rb.path('channel-number', params['channel-number'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SwitchPort>;
      })
    );
  }

  /**
   * GET /switch/{switch-id}/port Container.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSwitchPort$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSwitchPort(params: {

    /**
     * fabric-id (target in onos-config)
     */
    'fabric-id': any;

    /**
     * key {switch-id}
     */
    'switch-id': any;

    /**
     * key {cage-number}
     */
    'cage-number': any;

    /**
     * key {channel-number}
     */
    'channel-number': any;
  }): Observable<SwitchPort> {

    return this.getSwitchPort$Response(params).pipe(
      map((r: StrictHttpResponse<SwitchPort>) => r.body as SwitchPort)
    );
  }

  /**
   * Path part for operation getSwitchPortState
   */
  static readonly GetSwitchPortStatePath = '/sdn-fabric/v0.1.x/{fabric-id}/switch/{switch-id}/port/{cage-number}/{channel-number}/state';

  /**
   * GET /switch/{switch-id}/port/{cage-number}/{channel-number}/state Container.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSwitchPortState()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSwitchPortState$Response(params: {

    /**
     * fabric-id (target in onos-config)
     */
    'fabric-id': any;

    /**
     * key {switch-id}
     */
    'switch-id': any;

    /**
     * key {cage-number}
     */
    'cage-number': any;

    /**
     * key {channel-number}
     */
    'channel-number': any;
  }): Observable<StrictHttpResponse<SwitchPortState>> {

    const rb = new RequestBuilder(this.rootUrl, SwitchPortService.GetSwitchPortStatePath, 'get');
    if (params) {
      rb.path('fabric-id', params['fabric-id'], {});
      rb.path('switch-id', params['switch-id'], {});
      rb.path('cage-number', params['cage-number'], {});
      rb.path('channel-number', params['channel-number'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SwitchPortState>;
      })
    );
  }

  /**
   * GET /switch/{switch-id}/port/{cage-number}/{channel-number}/state Container.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSwitchPortState$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSwitchPortState(params: {

    /**
     * fabric-id (target in onos-config)
     */
    'fabric-id': any;

    /**
     * key {switch-id}
     */
    'switch-id': any;

    /**
     * key {cage-number}
     */
    'cage-number': any;

    /**
     * key {channel-number}
     */
    'channel-number': any;
  }): Observable<SwitchPortState> {

    return this.getSwitchPortState$Response(params).pipe(
      map((r: StrictHttpResponse<SwitchPortState>) => r.body as SwitchPortState)
    );
  }

  /**
   * Path part for operation getSwitchPortVlans
   */
  static readonly GetSwitchPortVlansPath = '/sdn-fabric/v0.1.x/{fabric-id}/switch/{switch-id}/port/{cage-number}/{channel-number}/vlans';

  /**
   * GET /switch/{switch-id}/port/{cage-number}/{channel-number}/vlans Container.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSwitchPortVlans()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSwitchPortVlans$Response(params: {

    /**
     * fabric-id (target in onos-config)
     */
    'fabric-id': any;

    /**
     * key {switch-id}
     */
    'switch-id': any;

    /**
     * key {cage-number}
     */
    'cage-number': any;

    /**
     * key {channel-number}
     */
    'channel-number': any;
  }): Observable<StrictHttpResponse<SwitchPortVlans>> {

    const rb = new RequestBuilder(this.rootUrl, SwitchPortService.GetSwitchPortVlansPath, 'get');
    if (params) {
      rb.path('fabric-id', params['fabric-id'], {});
      rb.path('switch-id', params['switch-id'], {});
      rb.path('cage-number', params['cage-number'], {});
      rb.path('channel-number', params['channel-number'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SwitchPortVlans>;
      })
    );
  }

  /**
   * GET /switch/{switch-id}/port/{cage-number}/{channel-number}/vlans Container.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSwitchPortVlans$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSwitchPortVlans(params: {

    /**
     * fabric-id (target in onos-config)
     */
    'fabric-id': any;

    /**
     * key {switch-id}
     */
    'switch-id': any;

    /**
     * key {cage-number}
     */
    'cage-number': any;

    /**
     * key {channel-number}
     */
    'channel-number': any;
  }): Observable<SwitchPortVlans> {

    return this.getSwitchPortVlans$Response(params).pipe(
      map((r: StrictHttpResponse<SwitchPortVlans>) => r.body as SwitchPortVlans)
    );
  }

}
