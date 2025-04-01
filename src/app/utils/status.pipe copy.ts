import { Pipe } from "@angular/core";

@Pipe({
    name: "status"
})
export class StatusPipe {
    transform(status: any) {
        let res;
        switch (status) {
            case "AGUARDANDO_ANALISE":
                res = "Aguardando Análise"    
            break;
            case "EM_ANALISE":
                res = "Em Análise"    
            break;
            case "AGUARDANDO_REVISAO":
                res = "Aguardando Revisão"    
            break;
            case "EM_REVISAO":
                res = "Em Revisão"    
            break;
            case "AGUARDANDO_APROVACAO":
                res = "Aguardando Aprovação"    
            break;
            case "EM_APROVACAO":
                res = "Em Aprovação"    
            break;
            case "APROVADO":
                res = "Aprovado"    
            break;
            case "RECUSADO":
                res = "Recusado"    
            break;
            default:
                break;
        }
        return res;
    }
}