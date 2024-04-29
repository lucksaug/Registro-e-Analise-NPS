using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Cadastro;
using api.Models;

namespace api.Mappers
{
    public static class CadastroMappers
    {
        public static CadastroDto ToCadastoDto(this Cadastro cadastroModel)
        {
            return new CadastroDto 
            {
                Cpf = cadastroModel.Cpf,
                Nota = cadastroModel.Nota,
                Dia = cadastroModel.Dia,
                Voto = cadastroModel.Voto
            };
        }
        public static CadastroDto ToNotaDto(this Cadastro cadastroModel)
        {
            return new CadastroDto
            {
                Cpf = cadastroModel.Cpf,
                Nota = cadastroModel.Nota,
                Dia = cadastroModel.Dia
            };
        }

        public static Cadastro ToCadastroFromCreateDTO(this CreateCadastroRequestDto cadastroDto)
        {
            return new Cadastro
            {
                Cpf = cadastroDto.Cpf,
                Nota = cadastroDto.Nota,
                Dia = cadastroDto.Dia,
                Voto = cadastroDto.Voto
            };
        }
    }
}