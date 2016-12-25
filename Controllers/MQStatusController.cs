using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MonitorCharts.Models;

namespace MonitorCharts.Controllers
{
    [Route("api/mq/")]
    public class MQStatusController : Controller
    {
        Random random = new Random();
        // GET api/values
        [HttpGet]
        public IEnumerable<QueueStatus> Get()
        {
            return new QueueStatus[] { 
                new QueueStatus() { Name="ABC", Depth=random.Next(0,100)},
                new QueueStatus() { Name="DEF", Depth=random.Next(0,100)}
             };
        }

        
    }
}
