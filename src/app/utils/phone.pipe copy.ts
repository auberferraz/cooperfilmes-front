import { Pipe } from "@angular/core";

@Pipe({
    name: "phone"
})
export class PhonePipe {
    transform(status: string) {
        switch (status) {
            case "AGUARDANDO_ANALISE":
                return "AGUARDANDO ANALISE"    
            break;
            case "EM_ANALISE":
                return "EM ANALISE"    
            break;
            case "AGUARDANDO_REVISAO":
                return "AGUARDANDO REVISAO"    
            break;
            case "EM_REVISAO":
                return "EM REVISAO"    
            break;
            case "AGUARDANDO_APROVACAO":
                return "AGUARDANDO APROVACAO"    
            break;
            case "EM_APROVACAO":
                return "EMAPROVACAO"    
            break;
            case "APROVADO":
                return "APROVADO"    
            break;
            case "RECUSADO":
                return "RECUSADO"    
            break;
            default:
                break;
        }
    }
}