using Microsoft.EntityFrameworkCore;

namespace dotnetcore_crud_app.Models
{
    public class DonationDbContext : DbContext
    {
        public DonationDbContext(DbContextOptions<DonationDbContext> options) : base(options)
        { }

        public DbSet<DonationCandidate> DonationCandidates { get; set; }
    }
}
