export class UpdatePatientDTO {
    readonly email: String;
    readonly password: String;
    readonly fName: String;
    readonly middleInitial: String;
    readonly lName: String;
    readonly dob: String;
    readonly address: {
        street: String,
        city: String,
        state: String,
        zipcode: Number
    };
    readonly primaryPhone: Number;
    readonly secondaryPhone: Number;
    readonly gender: String;
    readonly ssn: Number;
    readonly emergencyContact: {
        fName: String,
        lName: String,
        phone: Number
    };
    readonly insurance: {
        policyNumber: Number,
        groupNumber: Number,
        policyHolder: {
            fName: String,
            lName: String,
            ssn: Number,
            dob: String
        }
    };
}