using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.HttpResults;

namespace api.Models.Validations
{
    public class Cadastro_EnsureIsVoteAttribute : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            var cadastro = validationContext.ObjectInstance as Cadastro;
            if (cadastro != null){
                if (cadastro.Voto.Equals(1))
                {
                    return new ValidationResult("Você já votou hoje, vote novamente amanhã");
                }
                else{
                    return new ValidationResult("Você ainda Não votou hoje");
                }
            }
            else{
                return ValidationResult.Success;
            }

        }
    }
}