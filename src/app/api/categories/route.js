
export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  //  Single Insert Data
  // try {
  //   const prisma = new PrismaClient();

  //   let result = await prisma.category.create({
  //     data: {
  //       title: "NextJs",
  //       content: "It is React Fremwork",
  //     },
  //   });

  //   return NextResponse.json({
  //     status: "Success",
  //     result: { ...result, id: result.id.toString() },
  //   });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //  Insert Many Data
  // try {
  //   const prisma = new PrismaClient();

  //   const result = await prisma.category.createMany({
  //     data: [
  //       {
  //         title: "NextJs13",
  //         content: "It is React Fremwork",
  //       },
  //       {
  //         title: "ReactJs",
  //         content: "It is Js Fremwork",
  //       },
  //       {
  //         title: "VueJs",
  //         content: "It is JavaScript Fremwork",
  //       },
  //       {
  //         title: "NuxtJs",
  //         content: "It is Vue Fremwork",
  //       },
  //       // Add more user data objects here if needed
  //     ],
  //     skipDuplicates: true, // Skip duplicates
  //   });
  //   console.log(result);
  //   return NextResponse.json({
  //     status: "Success",
  //     result: result,
  //   });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  // !  Read All Data
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.category.findMany();

  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //  Read Single Data
  // try {
  //   const prisma = new PrismaClient();

  //   let result = await prisma.category.findUnique({
  //     // By unique identifier
  //     where: {
  //       content: "It is JavaScript Fremwork",
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  // !  Delete Single 
  // try {
  //   const prisma = new PrismaClient();

  //   let result = await prisma.category.delete({
  //     where: { content: "It is JavaScript Fremwork" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //   Update Single Data
  // try {
  //   const prisma = new PrismaClient();

  //   let result = await prisma.category.update({
  //     where: { content: "It is Js Fremwork" },
  //     data: {
  //       title: "AstroJs",
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }
}