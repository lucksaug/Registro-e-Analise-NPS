using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using api.Models.Validations;

namespace api.Models
{
    
    public class Cadastro
    {
        [Required, Key]
        public string Cpf { get; set; }
        [Range(0,10), Required]
        public int Nota { get; set; }
        public DateTime Dia { get; set; }

        [Cadastro_EnsureIsVote]
        public bool Voto { get; set; }
    }
}