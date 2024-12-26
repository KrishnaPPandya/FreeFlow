using Microsoft.EntityFrameworkCore;
using FreeCollabBackend.Models;

namespace FreeCollabBackend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<ExampleModel> Examples { get; set; }
    }
}