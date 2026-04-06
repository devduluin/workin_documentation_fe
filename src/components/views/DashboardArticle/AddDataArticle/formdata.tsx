// import React, { Dispatch, SetStateAction, useState } from "react";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { useForm } from "react-hook-form";
// import { useToast } from "@/hooks/use-toast";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import api from "@/lib/kyInterceptor";
// import { DashboardData } from "@/lib/shared-types";
// import { SelectGroup } from "@radix-ui/react-select";
// import { DialogTrigger } from "@/components/ui/dialog";

// type propsAddDashboard = {
//   setPostDashboard: Dispatch<SetStateAction<any>>;
//   categoryDashboard: Dispatch<SetStateAction<any>>;
// };
// const FormDatadashboard = ({
//   setPostDashboard,
//   categoryDashboard,
// }: propsAddDashboard) => {
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const { toast } = useToast();

//   const addDashboardSchema = z.object({
//     nama_dashboard: z.string(),
//     url_link: z.string(),
//     status: z.string(),
//     nama_kategori: z.string(),
//     id_kategori: z
//       .string()
//       .transform((val: string) => parseInt(val, 10))
//       .refine((val) => !isNaN(val), { message: "Invalid id kategori" }),
//     type: z.enum(["simpul", "lalulintas"]),
//   });

//   const addDashboard = useForm<z.infer<typeof addDashboardSchema>>({
//     resolver: zodResolver(addDashboardSchema),
//     defaultValues: {
//       nama_dashboard: "",
//       url_link: "",
//       nama_kategori: "",
//       id_kategori: undefined,
//       status: "active",
//       type: "simpul",
//     },
//   });
//   const onSubmitAddForm = async (
//     values: z.infer<typeof addDashboardSchema>,
//   ) => {
//     try {
//       setIsLoading(true);
//       const response = await api
//         .post(`dashboards`, {
//           json: {
//             idKategori: values.id_kategori,
//             namaDashboard: values.nama_dashboard,
//             urlLink: values.url_link,
//             status: values.status,
//             type: values.type,
//           },
//         })
//         .json();
//       if (response) {
//         const data: DashboardData = await api.get(`dashboards`).json();
//         setPostDashboard(data.items);
//         setIsLoading(false);
//         toast({ title: "Add data success" });
//       } else {
//         toast({ variant: "destructive", title: "Add data failed" });
//         setIsLoading(false);
//       }
//     } catch (err: any) {
//       toast({ variant: "destructive", title: "Add data failed" });
//       setIsLoading(false);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Form {...addDashboard}>
//       <form onSubmit={addDashboard.handleSubmit(onSubmitAddForm)}>
//         <div className="space-y-4">
//           <FormField
//             control={addDashboard.control}
//             name="nama_dashboard"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Nama Dashboard</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Nama Dashboard" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={addDashboard.control}
//             name="url_link"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Url</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Url" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={addDashboard.control}
//             name="id_kategori"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Kategori</FormLabel>
//                 <Select onValueChange={field.onChange}>
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder={"Select Kategori"} />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectGroup>
//                       {Array.isArray(categoryDashboard) &&
//                         categoryDashboard.map((category: any, i: number) => (
//                           <SelectItem
//                             key={i}
//                             value={String(category.id_kategori)}
//                           >
//                             {category.nama_kategori}
//                           </SelectItem>
//                         ))}
//                     </SelectGroup>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={addDashboard.control}
//             name="status"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Status</FormLabel>
//                 <Select
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                 >
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="active" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="active">active</SelectItem>
//                     <SelectItem value="not-active">not-active</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={addDashboard.control}
//             name="type"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Type</FormLabel>
//                 <Select
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                 >
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="active" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="simpul">Simpul</SelectItem>
//                     <SelectItem value="lalulintas">Lalu Lintas</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <DialogTrigger asChild>
//           <Button
//             type="submit"
//             disabled={isLoading}
//             className="mt-5 bg-index text-emerald-50 hover:bg-darkIndex "
//           >
//             {isLoading ? "Loading..." : "Confirm"}
//           </Button>
//         </DialogTrigger>
//       </form>
//     </Form>
//   );
// };

// export default FormDatadashboard;
