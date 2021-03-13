using System.Threading.Tasks;
using dotnetcore_crud_app.Models;
using dotnetcore_crud_app.Services.DonationCandidateServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnetcore_crud_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DonationCandidateController : ControllerBase
    {
        private readonly IDonationCandidateService _donationCandidateService;

        public DonationCandidateController(IDonationCandidateService donationCandidateService)
        {
            _donationCandidateService = donationCandidateService;
        }

        [HttpGet]
        public async Task<ActionResult> GetCandidates()
        {
            var candidate = await _donationCandidateService.GetCandidatesAsync();
            return Ok(candidate);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            var candidate = await _donationCandidateService.GetCandidateAsync(id);

            if (candidate == null)
            {
                return NotFound();
            }

            return Ok(candidate);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCandidate(int id, DonationCandidate donationCandidate)
        {
            donationCandidate.Id = id;

            try
            {
                await _donationCandidateService.UpdateCandidateAsync(id, donationCandidate);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_donationCandidateService.DonationCandidateExists(id))
                {
                    return NotFound();
                }

                throw;
            }

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<DonationCandidate>> DeleteCandidate(int id, DonationCandidate donationCandidate)
        {
            var candidate = await _donationCandidateService.GetCandidateAsync(id);

            if (candidate == null)
            {
                return NotFound();
            }


            await _donationCandidateService.DeleteCandidateAsync(donationCandidate);

            return Ok(donationCandidate);
        }

        [HttpPost]
        public async Task<ActionResult<DonationCandidate>> AddCandidate(DonationCandidate donationCandidate)
        {
            await _donationCandidateService.AddCandidateAsync(donationCandidate);

            return Ok(donationCandidate.Id);
        }
    }
}
