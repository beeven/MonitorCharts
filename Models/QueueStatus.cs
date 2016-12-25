using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;

namespace MonitorCharts.Models
{
    public class QueueStatus
    {
        public string Name {get;set;}
        public int Depth {get;set;}
    }
}