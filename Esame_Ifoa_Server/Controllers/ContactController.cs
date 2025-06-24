using EsameIfoa_Server.Domain.Services;
using EsameIfoa_Server.Dto;
using Microsoft.AspNetCore.Mvc;

namespace EsameIfoa_Server.Controllers
{
  [ApiController]
  [Route("api/[controller]")]

  public class ContactController(IContactService contactService) : ControllerBase
  {
    [HttpGet]
    public async Task<IActionResult> GetAllAsync(CancellationToken cancellationToken)
    {
      IEnumerable<ContactDto> contacts = await contactService.GetAllAsync(cancellationToken);
      return Ok(contacts);
    }

    [HttpPost]
    public async Task<IActionResult> AddAsync(ContactDto contact, CancellationToken cancellationToken)
    {
      bool contacts = await contactService.AddAsync(contact, cancellationToken);
      if (contacts)
      {
        return Ok("Contacts Added!");
      }
      return BadRequest("Added Contacts failed!");
    }
  }
}
