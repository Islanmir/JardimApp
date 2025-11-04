using Microsoft.EntityFrameworkCore;
using JardimAPI.Models;

namespace JardimAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Planta> Plantas { get; set; }
    }
}
