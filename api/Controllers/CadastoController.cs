using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Cadastro;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/dit[controller]")]
    [ApiController]
    public class CadastoController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public CadastoController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var cadastros = _context.Cadastros.ToList()
            .Select(s => s.ToCadastoDto());
            return Ok(cadastros);
        }

        [HttpGet("{cpf}")]
        public IActionResult GetByCpf([FromRoute] string cpf)
        {
            var cadastro = _context.Cadastros.Find(cpf);
            if (cadastro == null)
            {
                return NotFound();
            }
            return Ok(cadastro.ToNotaDto());
        }
        [HttpGet("{dia}")]
        public IActionResult GetNotesByDay([FromRoute] DateTime dia)
        {
            var cadastro = _context.Cadastros.Find(dia);
            return Ok(cadastro);
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateCadastroRequestDto cadastroDto)
        {
            var cadastroModel = cadastroDto.ToCadastroFromCreateDTO();
            _context.Cadastros.Add(cadastroModel);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetByCpf), new { cpf = cadastroModel.Cpf }, cadastroModel.ToCadastoDto());
        }

        [HttpPut]
        [Route("{cpf}")]
        public IActionResult Update([FromRoute] string? cpf, UpdateCadastroRequestDto updateDto)
        {
            var cadastroModel = _context.Cadastros.FirstOrDefault(x => x.Cpf == cpf);

            if (cadastroModel == null)
            {
                return NotFound();

            }

            cadastroModel.Nota = updateDto.Nota;
            cadastroModel.Dia = updateDto.Dia;
            cadastroModel.Voto = updateDto.Voto;

            _context.SaveChanges();

            return Ok(cadastroModel.ToCadastoDto());
        }
    }
}