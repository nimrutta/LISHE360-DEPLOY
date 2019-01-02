import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Pipe({
    name: 'safepipe',
    pure: true
  })
  export class SafePipe implements PipeTransform
  {
    private sanitizer:DomSanitizer;
  
    constructor(sanitizer:DomSanitizer)
    {
        this.sanitizer = sanitizer;
    }
  
    transform(url)
    {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }