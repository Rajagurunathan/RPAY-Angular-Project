using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace Rpay_Mobile_Recharge.Controllers
{
    public class ValuesController : ApiController
    {
        public SqlConnection con;
        public SqlDataAdapter da;
        public SqlDataReader dr;
        string sqlmaincon = ConfigurationManager.ConnectionStrings["mainconRC"].ConnectionString;


        // GET api/values
        public string[] Get()
        {
            return new string[] { "value1", "value2" };

        }

        public HttpResponseMessage GetAdmin()
        {
            DataTable dt = new DataTable();

            string q = "select * from Admin";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);
        }

        // -------------------------------------------------------------------------------------------------
        [HttpGet]

        public HttpResponseMessage GetOperators()
        {
            DataTable dt = new DataTable();

            string q = "select * from Operator";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        // -------------------------------------------------------------------------------------------------
        [HttpGet]

        public HttpResponseMessage GetPlans()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        // -------------------------------------------------------------------------------------------------
        [HttpGet]
        public HttpResponseMessage GetPlansAirtel()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1001";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        [HttpGet]
        public HttpResponseMessage Airtelpp()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1001 and plan_type='Popular Plans'";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        [HttpGet]
        public HttpResponseMessage Airteltopup()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1001 and plan_type='Top-Up'";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        [HttpGet]
        public HttpResponseMessage Airtelgbroam()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1001 and plan_type='International Roaming'";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        [HttpGet]
        public HttpResponseMessage Airtel4gdata()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1001 and plan_type='4G Data Voucher'";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        [HttpGet]

        public HttpResponseMessage GetPlansJio()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1000";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        [HttpGet]
        public HttpResponseMessage Jiopp()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1000 and plan_type='Popular Plans'";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        [HttpGet]
        public HttpResponseMessage Jiotopup()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1000 and plan_type='Top-Up'";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        [HttpGet]
        public HttpResponseMessage Jiogbroam()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1000 and plan_type='International Roaming'";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        [HttpGet]
        public HttpResponseMessage Jio4gdata()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1000 and plan_type='4G Data Voucher'";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        // -------------------------------------------------------------------------------------------------
        [HttpGet]

        public HttpResponseMessage GetPlansVI()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1002";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        [HttpGet]
        public HttpResponseMessage VIpp()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1002 and plan_type='Popular Plans'";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        [HttpGet]
        public HttpResponseMessage VItopup()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1002 and plan_type='Top-Up'";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        [HttpGet]
        public HttpResponseMessage VIgbroam()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1002 and plan_type='International Roaming'";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        [HttpGet]
        public HttpResponseMessage VI4gdata()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1002 and plan_type='4G Data Voucher'";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        // -------------------------------------------------------------------------------------------------
        [HttpGet]

        public HttpResponseMessage GetPlansBsnl()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1003";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        [HttpGet]
        public HttpResponseMessage Bsnlpp()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1003 and plan_type='Popular Plans'";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        [HttpGet]
        public HttpResponseMessage Bsnltopup()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1003 and plan_type='Top-Up'";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        [HttpGet]
        public HttpResponseMessage Bsnlgbroam()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1003 and plan_type='International Roaming'";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        [HttpGet]
        public HttpResponseMessage Bsnl4gdata()
        {
            DataTable dt = new DataTable();

            string q = "select * from Plans where operator_id=1003 and plan_type='4G Data Voucher'";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }
        // -------------------------------------------------------------------------------------------------

        [HttpGet]

        public HttpResponseMessage GetTransactions()
        {
            DataTable dt = new DataTable();

            string q = "select * from Transactions";

            con = new SqlConnection(sqlmaincon);
            con.Open();

            using (var cmd = new SqlCommand(q, con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dt);

        }

        // -------------------------------------------------------------------------------------------------

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
