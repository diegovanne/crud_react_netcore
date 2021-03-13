using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using dotnetcore_crud_app.Models;

namespace dotnetcore_crud_app.Services.DonationCandidateServices
{
    public interface IDonationCandidateService
    {
        Task<IEnumerable<DonationCandidate>> GetCandidatesAsync();

        Task<DonationCandidate> GetCandidateAsync(int id);

        Task UpdateCandidateAsync(int id, DonationCandidate donationCandidate);
        
        Task DeleteCandidateAsync(DonationCandidate donationCandidate);

        Task AddCandidateAsync(DonationCandidate donationCandidate);

        bool DonationCandidateExists(int id);
    }
}
