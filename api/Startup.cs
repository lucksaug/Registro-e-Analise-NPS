using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;

namespace api
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services) => 
        services.AddDbContext<ApplicationDBContext>();

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
        }
    }
}