import { Injectable } from '@angular/core'
import { Clinic } from './Clinic'

@Injectable()
export class ClinicService {

    public getGPList(): Array<Clinic> {

        return [{
            "clinicName": "Reservoir Clinic 1",
            "phoneNumber":123,
            "clinicAddress": "712, bedok reservoir road, bedok, Singapore, 470712",
            "clinicType": "General",
            "clinicRegion": "EAST",
            "latitude": 123,
            "longitude": 123
        },
        {
            "clinicName": "YSL Bedok Clinic & Surgery Pte Ltd",
            "phoneNumber":123,
            "clinicAddress": "539 Bedok North Street 3 #01-631, 460539",
            "clinicType": "General",
            "clinicRegion": "EAST",
            "latitude": 123,
            "longitude": 123
        },
        {
            "clinicName": "Oasis Family Clinic",
            "phoneNumber":123,
            "clinicAddress": "56 New Upper Changi Rd, Singapore 461056",
            "clinicType": "General",
            "clinicRegion": "EAST",
            "latitude": 123,
            "longitude": 123
        },
        {
            "clinicName": "Shenton Medical Group",
            "phoneNumber":123,
            "clinicAddress": "10 Sengkang Central, #01-04 Buangkok NEL MRT Station, 545061",
            "clinicType": "General",
            "clinicRegion": "NORTH",
            "latitude": 123,
            "longitude": 123
        }
        
        ];


    }


   public getSpecialistList(): Array<Clinic> {

        return [{
            "clinicName": "Reservoir Specialist Clinic 1",
            "phoneNumber":123,
            "clinicAddress": "712, bedok reservoir road, bedok, Singapore, 470712",
            "clinicType": "Specialist",
            "clinicRegion": "EAST",
            "latitude": 123,
            "longitude": 123
        },
        {
            "clinicName": "YSL Bedok Specialist & Surgery Pte Ltd",
            "phoneNumber":123,
            "clinicAddress": "539 Bedok North Street 3 #01-631, 460539",
            "clinicType": "Specialist",
            "clinicRegion": "EAST",
            "latitude": 123,
            "longitude": 123
        },
        {
            "clinicName": "Oasis Family Specialist Clinic",
            "phoneNumber":123,
            "clinicAddress": "56 New Upper Changi Rd, Singapore 461056",
            "clinicType": "Specialist",
            "clinicRegion": "EAST",
            "latitude": 123,
            "longitude": 123
        },
        {
            "clinicName": "Shenton Medical Specialist Group",
            "phoneNumber":123,
            "clinicAddress": "10 Sengkang Central, #01-04 Buangkok NEL MRT Station, 545061",
            "clinicType": "Specialist",
            "clinicRegion": "NORTH",
            "latitude": 123,
            "longitude": 123
        }
        
        ];


    }

public getDentalList(): Array<Clinic> {

        return [{
            "clinicName": "Reservoir Dental Clinic 1",
            "phoneNumber":123,
            "clinicAddress": "712, bedok reservoir road, bedok, Singapore, 470712",
            "clinicType": "Dental",
            "clinicRegion": "EAST",
            "latitude": 123,
            "longitude": 123
        },
        {
            "clinicName": "YSL Bedok Clinic & Dental Pte Ltd",
            "phoneNumber":123,
            "clinicAddress": "539 Bedok North Street 3 #01-631, 460539",
            "clinicType": "Dental",
            "clinicRegion": "EAST",
            "latitude": 123,
            "longitude": 123
        },
        {
            "clinicName": "Oasis Family Dental Clinic",
            "phoneNumber":123,
            "clinicAddress": "56 New Upper Changi Rd, Singapore 461056",
            "clinicType": "Dental",
            "clinicRegion": "EAST",
            "latitude": 123,
            "longitude": 123
        },
        {
            "clinicName": "Shenton Dental Group",
            "phoneNumber":123,
            "clinicAddress": "10 Sengkang Central, #01-04 Buangkok NEL MRT Station, 545061",
            "clinicType": "Dental",
            "clinicRegion": "NORTH",
            "latitude": 123,
            "longitude": 123
        }
        
        ];


    }


}