using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Cadastro
{
    public class CadastroDto
    {
        [Key]
        public required string Cpf { get; set; }
        public int Nota { get; set; }
        public DateTime Dia { get; set; }
        public bool Voto { get; set; }
    }
}