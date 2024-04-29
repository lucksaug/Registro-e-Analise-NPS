using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Cadastro
{
    public class UpdateCadastroRequestDto
    {
        public int Nota { get; set; }
        public DateTime Dia { get; set; }
        public bool Voto { get; set; }
    }
}