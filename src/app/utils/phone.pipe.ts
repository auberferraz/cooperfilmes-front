import { Pipe } from "@angular/core";

@Pipe({
    name: "phone"
})
export class PhonePipe {
    transform(phoneNumberString: any) {
        return phoneNumberString.replace(/\D/g, '')
            .replace(/\D+/g, '')
            .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
}