function icmp_tax(uf){
    uf = uf.toUpperCase();
    uf_base = ["AC", "AL", "AM", "AP", "BA",
        "CE", "DF", "ES", "GO", "MA",
        "MT", "MS", "MG", "PA", "PB",
        "PR", "PE", "PI", "RN", "RS",
        "RJ", "RO", "RR", "SC", "SP",
        "SE", "TO" 
    ];
    uf_tax = [0.17, 0.17, 0.18, 0.18, 0.18,
        0.18, 0.18, 0.17, 0.17, 0.18, 0.17,
        0.17, 0.18, 0.17, 0.18, 0.18, 0.18,
        0.18, 0.18, 0.18, 0.18, 0.175, 0.17,
        0.17, 0.17, 0.18, 0.18, 0.18
    ];
    return uf_tax[uf_base.indexOf(uf)]
}

