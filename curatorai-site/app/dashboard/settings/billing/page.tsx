import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
	Card,
	CardAction,
	CardDescription,
    CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"




export default function Page() {
    return(
        <div className="
				*:data-[slot=card]:from-primary/5 
				*:data-[slot=card]:to-card 
				dark:*:data-[slot=card]:bg-card 
				grid 
				grid-cols-1 
				gap-10 
				px-4 
				*:data-[slot=card]:bg-gradient-to-t 
				*:data-[slot=card]:shadow-xs 
				lg:px-6 

			"
		>




            <Card className="@container/card w-full">


				<CardHeader className="">
					<CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
						Billing Details
					</CardTitle>
				</CardHeader>


                <CardContent className="grid gap-y-5">


                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="name">
                            Organzation Name
                        </Label>
                        <Input type="orgname" id="orgname" placeholder="Organization Name" className="bg-white" />
                    </div>


                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="country">
                            Country or Region
                        </Label>
                        <Input type="country" id="country" placeholder="Country" className="bg-white" />
                    </div>


                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="url">
                            Address
                        </Label>
                        <Input type="address" id="address" placeholder="Address" className="bg-white" />
                    </div>


                </CardContent>


				<CardFooter className="flex-col items-end gap-1.5 text-sm">

					<Button>
                        Save
                    </Button>

				</CardFooter>


			</Card>




            <Card className="@container/card w-full">


				<CardHeader className="">
					<CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
						Billing Email
					</CardTitle>
				</CardHeader>


                <CardContent className="grid gap-y-5">


                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="email">
                            Email used for Invoices
                        </Label>
                        <Input type="email" id="email" placeholder="Email" className="bg-white" />
                    </div>


                </CardContent>


				<CardFooter className="flex-col items-end gap-1.5 text-sm">

					<Button>
                        Save
                    </Button>

				</CardFooter>


			</Card>




        </div>
    );
}



