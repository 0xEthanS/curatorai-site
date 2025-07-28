import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
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
						General
					</CardTitle>
				</CardHeader>


                <CardContent className="grid gap-y-5">
                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="name">
                            Name
                        </Label>
                        <Input type="name" id="name" placeholder="Name" className="bg-white" />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="url">
                            Team URL
                        </Label>
                        <Input type="url" id="url" placeholder="URL" className="bg-white" />
                    </div>
                </CardContent>


				<CardFooter className="flex-col items-end gap-1.5 text-sm">

					<Button>
                        Save
                    </Button>

				</CardFooter>


			</Card>




            <Card className="@container/card w-full shadow-red-500">


				<CardHeader className="">
					<CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl text-red-500">
						Delete Team
					</CardTitle>
				</CardHeader>


                <CardContent className="grid gap-y-5">
                    Once you delete your account, there is no going back. All of your data will be lost. All of your uploaded
                    data and trained agents will be lost. Please be certain. This action is not reversible. 
                </CardContent>


				<CardFooter className="flex-col items-end gap-1.5 text-sm">

					<Button className="bg-red-500">
                        Delete
                    </Button>

				</CardFooter>


			</Card>




        </div>
    );
}



