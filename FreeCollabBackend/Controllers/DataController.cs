using Microsoft.AspNetCore.Mvc;
using FreeCollabBackend.Services;

namespace FreeCollabBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DataController : ControllerBase
    {
        private readonly ExampleService _exampleService;

        public DataController(ExampleService exampleService)
        {
            _exampleService = exampleService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var data = _exampleService.GetExampleData();
            return Ok(data);
        }
    }
}