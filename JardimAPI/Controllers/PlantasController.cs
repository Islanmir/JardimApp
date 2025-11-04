using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JardimAPI.Data;
using JardimAPI.Models;

namespace JardimAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlantasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PlantasController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Planta>>> GetPlantas()
        {
            return await _context.Plantas.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Planta>> GetPlanta(int id)
        {
            var planta = await _context.Plantas.FindAsync(id);
            if (planta == null) return NotFound();
            return planta;
        }

        [HttpPost]
        public async Task<ActionResult<Planta>> PostPlanta(Planta planta)
        {
            _context.Plantas.Add(planta);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPlanta), new { id = planta.Id }, planta);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlanta(int id, Planta planta)
        {
            if (id != planta.Id) return BadRequest();
            _context.Entry(planta).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlanta(int id)
        {
            var planta = await _context.Plantas.FindAsync(id);
            if (planta == null) return NotFound();

            _context.Plantas.Remove(planta);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
