export class Utils {


    // Função para obter o texto correspondente a uma chave de um enum
    static getEnumText<T>(enumObj: any, key: string): string | undefined {
        // Verifica se a chave existe no enum e retorna o valor correspondente
        return enumObj[key as keyof T];
    }



}