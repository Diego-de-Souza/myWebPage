export interface CertificatesModel {
    id: number;
    formation: string,
    carga_horaria: number,
    data_conclusao: string,
    imagem: {
        frente: string,
        verso: string
    },
}

export interface CertificatePrint {
    formation: string,
    imagem: {
        frente: string,
        verso: string
    }
}