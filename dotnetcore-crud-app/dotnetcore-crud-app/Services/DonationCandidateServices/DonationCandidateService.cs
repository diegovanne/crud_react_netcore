using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnetcore_crud_app.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnetcore_crud_app.Services.DonationCandidateServices
{
    public class DonationCandidateService : IDonationCandidateService
    {
        private readonly DonationDbContext _context;
        public DonationCandidateService(DonationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<DonationCandidate>> GetCandidatesAsync()
        {
            return await _context.DonationCandidates.ToListAsync();
        }

        public async Task<DonationCandidate> GetCandidateAsync(int id)
        {
            return await _context.DonationCandidates.FindAsync(id);
        }

        public async Task UpdateCandidateAsync(int id, DonationCandidate donationCandidate)
        {
            _context.Entry(donationCandidate).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteCandidateAsync(DonationCandidate donationCandidate)
        {
            _context.DonationCandidates.Remove(donationCandidate);
            await _context.SaveChangesAsync();
        }

        public async Task AddCandidateAsync(DonationCandidate donationCandidate)
        {
            _context.DonationCandidates.Add(donationCandidate);
            await _context.SaveChangesAsync();
        }

        public bool DonationCandidateExists(int id)
        {
            return _context.DonationCandidates.Any(e => e.Id == id);
        }
    }
}
