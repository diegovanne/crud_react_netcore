using Microsoft.EntityFrameworkCore.Migrations;

namespace dotnetcore_crud_app.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DonationCandidates",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Fullname = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Mobile = table.Column<string>(type: "nvarchar(16)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Age = table.Column<int>(type: "int", nullable: false),
                    BloodGroup = table.Column<string>(type: "nvarchar(3)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DonationCandidates", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DonationCandidates");
        }
    }
}
