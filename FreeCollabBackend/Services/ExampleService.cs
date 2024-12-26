using FreeCollabBackend.Models;
using System.Collections.Generic;

namespace FreeCollabBackend.Services
{
    public class ExampleService
    {
        public List<ExampleModel> GetExampleData()
        {
            return new List<ExampleModel>
            {
                new ExampleModel { Id = 1, Name = "Example 1" },
                new ExampleModel { Id = 2, Name = "Example 2" }
            };
        }
    }
}