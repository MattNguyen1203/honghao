'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {format} from 'date-fns'

import {Button} from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {Calendar} from '@/components/ui/calendar'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import {useEffect, useState} from 'react'
import InformationForm from './InformationForm'
import {FORM_API} from '@/lib/constants'
import {useToast} from '@/components/ui/use-toast'
import Image from 'next/image'
import Link from 'next/link'

const data = {
  typeoftour: ['Best Budget', 'Standard', 'Premium'],
  choosedays: [
    {title: '4 days 3 night', day: 4},
    {title: '3 days 2 night', day: 3},
    {title: '2 days 1 night', day: 2},
  ],
  pickup: ['Hà Nội1', 'Hà Nội2', 'Hà Nội3'],
  droff: [
    {title: 'Hà Nội11', address: ['Hà Nội11131', 'Hà Nội11221', 'Hà Nội11233']},
    {
      title: 'Hà Nội12',
      address: ['Hà Nội121312', 'Hà Nội12221', 'Hà Nội13223'],
    },
    {
      title: 'Hà Nội13',
      address: ['Hà Nội131312', 'Hà Nội1323123', 'Hà Nội133123'],
    },
  ],
  paxValueSelf: 169,
  paxValueLocal: 199,
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z
    .string()
    .min(1, {message: 'Please enter your email!'})
    .email({message: 'Enter the correct email format!'}),
  phone: z
    .string()
    .min(1, {message: 'Please enter your phone number.'})
    .regex(
      /^(999|998|997|996|995|994|993|992|991|990|979|978|977|976|975|974|973|972|971|970|969|968|967|966|965|964|963|962|961|960|899|898|897|896|895|894|893|892|891|890|889|888|887|886|885|884|883|882|881|880|879|878|877|876|875|874|873|872|871|870|859|858|857|856|855|854|853|852|851|850|839|838|837|836|835|834|833|832|831|830|809|808|807|806|805|804|803|802|801|800|699|698|697|696|695|694|693|692|691|690|689|688|687|686|685|684|683|682|681|680|679|678|677|676|675|674|673|672|671|670|599|598|597|596|595|594|593|592|591|590|509|508|507|506|505|504|503|502|501|500|429|428|427|426|425|424|423|422|421|420|389|388|387|386|385|384|383|382|381|380|379|378|377|376|375|374|373|372|371|370|359|358|357|356|355|354|353|352|351|350|299|298|297|296|295|294|293|292|291|290|289|288|287|286|285|284|283|282|281|280|269|268|267|266|265|264|263|262|261|260|259|258|257|256|255|254|253|252|251|250|249|248|247|246|245|244|243|242|241|240|239|238|237|236|235|234|233|232|231|230|229|228|227|226|225|224|223|222|221|220|219|218|217|216|215|214|213|212|211|210|98|95|94|93|92|91|90|86|84|0|82|81|66|65|64|63|62|61|60|58|57|56|55|54|53|52|51|49|48|47|46|45|44|43|41|40|39|36|34|33|32|31|30|27|20|7|1)[0-9]{0,14}$/,
      {message: 'Invalid format!'},
    ),
  message: z.string(),
  typeoftour: z.string().min(1, 'Please fill out this field'),
  choosedays: z.string().min(1, 'Please fill out this field'),
  pickup: z.string().min(1, 'Please fill out this field'),
  droff: z.string().min(1, 'Please fill out this field'),
  dob: z.date({
    required_error: 'A date of birth is required.',
    message: 'Please fill out this field',
  }),
  address: z.string().min(1, 'Please fill out this field'),
  destination: z.string().min(1, 'Please fill out this field'),
  enddate: z.date({
    required_error: 'A date of birth is required.',
    message: 'Please fill out this field',
  }),
})

export default function HomeForm({isTourDetail = false, dataTourDetail}) {
  const {toast} = useToast()
  const [paxValueSelf, setPaxValueSelf] = useState(1)
  const [paxValueLocal, setPaxValueLocal] = useState(1)
  const [dataDestination, setDataDestination] = useState(1)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDialogText, setIsDialogText] = useState('')
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      typeoftour: '',
      choosedays: '',
      message: '',
      pickup: '',
      droff: '',
      dob: '',
      enddate: '',
      address: '',
      destination: '',
    },
  })
  const dataForm = form.watch()
  const [endDate, setEndDate] = useState(null)
  // set data typeoftour, choosedays form TourDetail
  useEffect(() => {
    if (isTourDetail) {
      form.setValue('typeoftour', dataTourDetail?.typeoftour)
      form.setValue('choosedays', dataTourDetail?.choosedays?.title)
    }
  }, [dataTourDetail])

  // tính ngày enddate theo tour
  useEffect(() => {
    let startDate = dataForm?.dob
    let endDateUse = new Date(startDate)
    if (dataForm?.dob && dataForm?.choosedays) {
      const dayValue = data?.choosedays.find(
        (item) => item.title === dataForm?.choosedays,
      )

      endDateUse.setDate(startDate?.getDate() + dayValue?.day || 0)
      setEndDate(endDateUse)
      form.setValue('enddate', endDateUse)
    }
  }, [dataForm?.choosedays, dataForm?.dob])

  // set enddate theo tour Detail
  useEffect(() => {
    if (isTourDetail && dataForm?.dob) {
      let startDate = dataForm?.dob
      let endDateUse = new Date(startDate)
      endDateUse.setDate(startDate?.getDate() + dataTourDetail?.choosedays?.day)
      setEndDate(endDateUse)
      form.setValue('enddate', endDateUse)
    }
  }, [dataForm?.dob])

  //lấy data từ droff
  useEffect(() => {
    form.setValue('destination', '')
    const dataDestination = data?.droff.find(
      (item) => item.title === dataForm?.droff,
    )
    setDataDestination(dataDestination)
  }, [dataForm?.droff])

  // formatted date từ chuổi sang dd/mm/yyyy
  const formattedDate = (date) => {
    let newDate = new Date(date || 0)
    let day = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()
    return `${day}/${month}/${year}`
  }

  // post gg form + gg sheet
  async function postFile(newvalue) {
    try {
      const formdata = new FormData()
      const formattedDob = formattedDate(newvalue?.dob)
      const formattedEnddate = formattedDate(newvalue?.enddate)
      formdata?.append('entry.335637933', newvalue?.username)
      formdata?.append('entry.1417657903', newvalue?.email)
      formdata?.append('entry.516066790', newvalue?.phone)
      formdata?.append(
        'entry.513250024',
        newvalue?.typeoftour || dataTourDetail?.typeoftour,
      )
      formdata?.append(
        'entry.531591585',
        newvalue?.choosedays || dataTourDetail?.choosedays?.title,
      )
      formdata?.append('entry.1318177335', newvalue?.message)
      formdata?.append('entry.596297400', newvalue?.pickup)
      formdata?.append('entry.737203426', newvalue?.droff)
      formdata?.append('entry.1683072828', formattedDob)
      formdata?.append('entry.1967653042', formattedEnddate)
      formdata?.append('entry.571877462', newvalue?.address)
      formdata?.append('entry.1295571760', newvalue?.destination)
      formdata?.append('entry.954465883', paxValueLocal + paxValueSelf)
      formdata?.append('entry.681687580', dataTourDetail?.titleTour)
      await fetch(`${FORM_API}`, {
        method: 'POST',
        body: formdata,
        mode: 'no-cors',
      })
      setIsDialogOpen(true)
      setIsDialogText('Successfully booked the tour')
    } catch (error) {
      setIsDialogText('fail booked the tour')
      toast({
        title: 'Sending information failed',
        description:
          'Please check the information you have filled in again. ( ͡° ͜ʖ ͡° )',
      })
      console.log(error)
    }
  }

  function onSubmit(values) {
    if (paxValueSelf === 0 && paxValueLocal === 0) {
      toast({
        title: 'Sending information failed',
        description: 'Please select the number of people',
      })
      return
    }
    const newvalue = {
      paxValueSelf: paxValueSelf,
      paxValueLocal: paxValueLocal,
      ...values,
    }
    postFile(newvalue)
  }
  // click out cho pupup thông báo thành công
  const handleClickOutside = (event) => {
    if (!event.target.closest('.child_video')) {
      setIsDialogOpen(false)
    }
  }
  return (
    <>
      <section
        className={`${
          isTourDetail
            ? 'xmd:bg-white xmd:!pb-[4rem]'
            : 'bg-white xmd:!pb-[7.5rem]'
        } flex xmd:flex-col xmd:w-full w-fit xmd:rounded-none rounded-[1.5rem] relative`}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={`${
              isTourDetail
                ? 'w-[54.1875rem] md:!pr-[1.5rem] xmd:!p-0'
                : 'w-[34.75rem]'
            } space-y-[0.75rem] xmd:w-full xmd:space-y-0 rounded-[1.5rem] bg-white py-[1.5rem] xmd:pb-[0.75rem] xmd:pt-[0.75rem] pr-[0.75rem] pl-[1.5rem] xmd:pl-[0.75rem] flex flex-col`}
          >
            {isTourDetail && (
              <div className='xmd:hidden order-1 flex justify-start items-center w-full space-x-[1.25rem]'>
                <span className='text-0875 font-bold text-[#2E2E2E]'>
                  Type of tour:
                </span>
                <span className='text-1 text-[#727272]'>
                  Ha Giang Loop tour: Itinerary in 3 Days 4 Nights
                </span>
              </div>
            )}
            <div
              className={`${
                isTourDetail && 'order-3 xmd:order-1'
              } space-y-[0.75rem]`}
            >
              <FormField
                control={form.control}
                name='username'
                render={({field}) => (
                  <FormItem>
                    <FormLabel className='text-0875 font-bold xmd:font-extrabold text-[#2E2E2E] mb-[0.5rem]'>
                      Customer information:
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='!h-[2.5rem] py-[0.75rem] px-[1rem] rounded-[0.5rem] border-[2px] border-solid border-greyscale-5 focus:border-orange-normal bg-white focus-visible:ring-transparent'
                        autoComplete='off'
                        placeholder='Peter Nguyen Tuan Anh'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex w-full space-x-[0.75rem]'>
                <FormField
                  control={form.control}
                  name='phone'
                  render={({field}) => (
                    <FormItem className='flex-1'>
                      <FormControl>
                        <Input
                          className='!h-[2.5rem] py-[0.75rem] px-[1rem] rounded-[0.5rem] border-[2px] border-solid border-greyscale-5 focus:border-orange-normal bg-white focus-visible:ring-transparent'
                          autoComplete='off'
                          placeholder='Phone (Whatsapp) *'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='email'
                  render={({field}) => (
                    <FormItem className='flex-1'>
                      <FormControl>
                        <Input
                          className='!h-[2.5rem] py-[0.75rem] px-[1rem] rounded-[0.5rem] border-[2px] border-solid border-greyscale-5 focus:border-orange-normal bg-white focus-visible:ring-transparent'
                          autoComplete='off'
                          placeholder='Email *'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name='message'
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className='resize-none !h-[3.6875rem] !min-h-[3.6875rem] py-[0.75rem] px-[1rem] rounded-[0.5rem] border-[2px] border-solid border-greyscale-5 focus:border-orange-normal bg-white focus-visible:ring-transparent'
                        placeholder='Message *'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {!isTourDetail && (
                <div className='flex w-full space-x-[0.75rem]'>
                  <FormField
                    control={form.control}
                    name='typeoftour'
                    render={({field}) => (
                      <FormItem className='flex-1'>
                        <FormLabel className='text-0875 font-bold text-greyscale-80 mb-[0.5rem]'>
                          Type of tour:
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className='border-[2px] border-solid focus:border-orange-normal border-greyscale-5 focus:ring-transparent'>
                              <SelectValue
                                className='placeholder:text-greyscale-10 placeholder:text-0875 flex-1'
                                placeholder='Choose type tour'
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className='min-w-[16rem] p-[1.25rem] rounded-[0.75rem] sahdow-[90px_128px_44px_0px_rgba(66,72,66,0.00),57px_82px_40px_0px_rgba(66,72,66,0.01),32px_46px_34px_0px_rgba(66,72,66,0.05),14px_20px_25px_0px_rgba(66,72,66,0.09),4px_5px_14px_0px_rgba(66,72,66,0.10)]'>
                            {data?.typeoftour?.map((e, index) => (
                              <>
                                <SelectItem
                                  key={index}
                                  className='*:text-[1rem] *:font-bold *:text-greyscale-80 hover:bg-[#f1f1f1] py-[1.12rem]'
                                  value={e}
                                >
                                  {e}
                                </SelectItem>
                                <hr className='last:hidden w-full h-[0.0625rem] bg-[#f1f1f1]' />
                              </>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='choosedays'
                    render={({field}) => (
                      <FormItem className='flex-1'>
                        <FormLabel className='text-0875 font-bold text-greyscale-80 mb-[0.5rem]'>
                          Choose days
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className='border-[2px] border-solid focus:border-orange-normal border-greyscale-5 focus:ring-transparent'>
                              <SelectValue
                                className='text-greyscale-10 text-0875 flex-1'
                                placeholder='Choose day'
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className='min-w-[16rem] p-[1.25rem] rounded-[0.75rem] sahdow-[90px_128px_44px_0px_rgba(66,72,66,0.00),57px_82px_40px_0px_rgba(66,72,66,0.01),32px_46px_34px_0px_rgba(66,72,66,0.05),14px_20px_25px_0px_rgba(66,72,66,0.09),4px_5px_14px_0px_rgba(66,72,66,0.10)]'>
                            {data?.choosedays?.map((e, index) => (
                              <>
                                <SelectItem
                                  key={index}
                                  className='*:text-[1rem] *:font-bold *:text-greyscale-80 hover:bg-[#f1f1f1] py-[1.12rem]'
                                  value={e?.title}
                                >
                                  {e?.title}
                                </SelectItem>
                                <hr className='last:hidden w-full h-[0.0625rem] bg-[#f1f1f1]' />
                              </>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              <div className='flex xmd:flex-col w-full md:space-x-[0.75rem]'>
                <div className='flex-1 flex space-x-[0.75rem]'>
                  <FormField
                    control={form.control}
                    name='pickup'
                    render={({field}) => (
                      <FormItem className='flex-1'>
                        <FormLabel className='text-0875 font-bold text-greyscale-80 mb-[0.5rem]'>
                          Pick up
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className='border-[2px] border-solid focus:border-orange-normal border-greyscale-5 focus:ring-transparent'>
                              <SelectValue
                                className='text-greyscale-10 text-0875 flex-1'
                                placeholder='Select Pick up'
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className='min-w-[16rem] p-[1.25rem] rounded-[0.75rem] sahdow-[90px_128px_44px_0px_rgba(66,72,66,0.00),57px_82px_40px_0px_rgba(66,72,66,0.01),32px_46px_34px_0px_rgba(66,72,66,0.05),14px_20px_25px_0px_rgba(66,72,66,0.09),4px_5px_14px_0px_rgba(66,72,66,0.10)]'>
                            {data?.pickup?.map((e, index) => (
                              <>
                                <SelectItem
                                  key={index}
                                  className='*:text-[1rem] *:font-bold *:text-greyscale-80 hover:bg-[#f1f1f1] py-[1.12rem]'
                                  value={e}
                                >
                                  {e}
                                </SelectItem>
                                <hr className='last:hidden w-full h-[0.0625rem] bg-[#f1f1f1]' />
                              </>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='dob'
                    render={({field}) => (
                      <FormItem className='!space-y-[0.4rem] flex flex-col justify-start flex-1 pt-[0.25rem]'>
                        <FormLabel className='text-0875 font-bold text-greyscale-80 mb-[0.5rem]'>
                          Departure date
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={'outline'}
                                className={`flex justify-center items-center !h-[2.5rem] space-x-[0.25rem] border-[2px] border-solid border-greyscale-5 focus:border-orange-normal px-0 py-0 ${
                                  !field?.value && 'text-muted-foreground'
                                }`}
                              >
                                {field?.value ? (
                                  <span className='font-normal text-0875 text-greyscale-60 mr-[0.5rem]'>
                                    {format(field.value, 'dd/M/yyyy')}
                                  </span>
                                ) : (
                                  <span className='font-normal text-0875 text-greyscale-60 mr-[0.5rem]'>
                                    Pick a date
                                  </span>
                                )}
                                <svg
                                  className='w-[0.96294rem] h-[1rem]'
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='16'
                                  height='16'
                                  viewBox='0 0 16 16'
                                  fill='none'
                                >
                                  <path
                                    d='M2.41836 16.0001H13.5828C14.7532 16.0001 15.7043 15.049 15.7043 13.8786V3.30667C15.7043 2.1363 14.7532 1.18517 13.5828 1.18517H12.7413V0.592585C12.7413 0.266653 12.4746 0 12.1487 0C11.8228 0 11.5561 0.266653 11.5561 0.592585V1.18517H4.44504V0.592585C4.44504 0.266653 4.17834 0 3.85241 0C3.52648 0 3.25983 0.266653 3.25983 0.592585V1.18517H2.41836C1.24799 1.18517 0.296875 2.1363 0.296875 3.30667V13.8786C0.296875 15.049 1.24799 16.0001 2.41836 16.0001ZM1.48209 3.30667C1.48209 2.79113 1.90282 2.37039 2.41836 2.37039H3.25983V2.96298C3.25983 3.28891 3.52648 3.55556 3.85241 3.55556C4.17834 3.55556 4.445 3.28891 4.445 2.96298V2.37039H11.5561V2.96298C11.5561 3.28891 11.8228 3.55556 12.1487 3.55556C12.4746 3.55556 12.7413 3.28891 12.7413 2.96298V2.37039H13.5828C14.0983 2.37039 14.519 2.79113 14.519 3.30667V5.03707H1.48209V3.30667ZM1.48209 6.22224H14.5191V13.8786C14.5191 14.3941 14.0984 14.8149 13.5829 14.8149H2.41836C1.90282 14.8149 1.48209 14.3941 1.48209 13.8786V6.22224Z'
                                    fill='#E64827'
                                  />
                                </svg>
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent
                            align='start'
                            className='w-auto p-0'
                          >
                            <Calendar
                              mode='single'
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date <= new Date().setHours(0, 0, 0, 0)
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name='address'
                  render={({field}) => (
                    <FormItem className='flex-1'>
                      <FormLabel className='text-0875 font-bold text-greyscale-80 mb-[0.5rem]'>
                        Address *
                      </FormLabel>
                      <FormControl>
                        <Input
                          className='!h-[2.5rem] py-[0.75rem] px-[1rem] rounded-[0.5rem] border-[2px] border-solid border-greyscale-5 focus:border-orange-normal bg-white focus-visible:ring-transparent'
                          autoComplete='off'
                          placeholder='Address *'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='flex w-full xmd:flex-col md:space-x-[0.75rem]'>
                <div className='flex-1 flex space-x-[0.75rem]'>
                  <FormField
                    control={form.control}
                    name='droff'
                    render={({field}) => (
                      <FormItem className='flex-1'>
                        <FormLabel className='text-0875 font-bold text-greyscale-80 mb-[0.5rem]'>
                          Droff
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className='border-[2px] border-solid focus:border-orange-normal border-greyscale-5 focus:ring-transparent'>
                              <SelectValue
                                className='text-greyscale-10 text-0875 flex-1'
                                placeholder='Select Droff'
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className='min-w-[16rem] p-[1.25rem] rounded-[0.75rem] sahdow-[90px_128px_44px_0px_rgba(66,72,66,0.00),57px_82px_40px_0px_rgba(66,72,66,0.01),32px_46px_34px_0px_rgba(66,72,66,0.05),14px_20px_25px_0px_rgba(66,72,66,0.09),4px_5px_14px_0px_rgba(66,72,66,0.10)]'>
                            {data?.droff?.map((e, index) => (
                              <>
                                <SelectItem
                                  key={index}
                                  className='*:text-[1rem] *:font-bold *:text-greyscale-80 hover:bg-[#f1f1f1] py-[1.12rem]'
                                  value={e?.title}
                                >
                                  {e?.title}
                                </SelectItem>
                                <hr className='last:hidden w-full h-[0.0625rem] bg-[#f1f1f1]' />
                              </>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='enddate'
                    render={({field}) => (
                      <FormItem className='!space-y-[0.4rem] flex flex-col justify-start flex-1 pt-[0.25rem]'>
                        <FormLabel className='text-0875 font-bold text-greyscale-80 mb-[0.5rem]'>
                          End date
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                disabled
                                variant={'outline'}
                                className={`flex justify-center items-center bg-greyscale-5 !h-[2.5rem] space-x-[0.25rem] border-[2px] border-solid border-greyscale-5 focus:border-orange-normal px-0 py-0 text-left font-normal text-0875 text-greyscale-60 ${
                                  !field?.value && 'text-muted-foreground'
                                }`}
                              >
                                {dataForm?.dob && endDate ? (
                                  <span className='text-center font-normal text-0875 text-greyscale-60 mr-[0.5rem]'>
                                    {format(field.value, 'dd/M/yyyy')}
                                  </span>
                                ) : dataForm?.choosedays ? (
                                  <span className='text-center font-normal text-0875 text-greyscale-60 mr-[0.5rem]'>
                                    Pick a date
                                  </span>
                                ) : (
                                  <span className='text-center font-normal text-0875 text-greyscale-60 mr-[0.5rem]'>
                                    Pick Choose
                                  </span>
                                )}
                                <svg
                                  className='size-[1rem]'
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='16'
                                  height='16'
                                  viewBox='0 0 16 16'
                                  fill='none'
                                >
                                  <path
                                    d='M2.41836 16.0001H13.5828C14.7532 16.0001 15.7043 15.049 15.7043 13.8786V3.30667C15.7043 2.1363 14.7532 1.18517 13.5828 1.18517H12.7413V0.592585C12.7413 0.266653 12.4746 0 12.1487 0C11.8228 0 11.5561 0.266653 11.5561 0.592585V1.18517H4.44504V0.592585C4.44504 0.266653 4.17834 0 3.85241 0C3.52648 0 3.25983 0.266653 3.25983 0.592585V1.18517H2.41836C1.24799 1.18517 0.296875 2.1363 0.296875 3.30667V13.8786C0.296875 15.049 1.24799 16.0001 2.41836 16.0001ZM1.48209 3.30667C1.48209 2.79113 1.90282 2.37039 2.41836 2.37039H3.25983V2.96298C3.25983 3.28891 3.52648 3.55556 3.85241 3.55556C4.17834 3.55556 4.445 3.28891 4.445 2.96298V2.37039H11.5561V2.96298C11.5561 3.28891 11.8228 3.55556 12.1487 3.55556C12.4746 3.55556 12.7413 3.28891 12.7413 2.96298V2.37039H13.5828C14.0983 2.37039 14.519 2.79113 14.519 3.30667V5.03707H1.48209V3.30667ZM1.48209 6.22224H14.5191V13.8786C14.5191 14.3941 14.0984 14.8149 13.5829 14.8149H2.41836C1.90282 14.8149 1.48209 14.3941 1.48209 13.8786V6.22224Z'
                                    fill='#3F3F3F'
                                  />
                                </svg>
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className='w-auto p-0'>
                            <Calendar
                              mode='single'
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name='destination'
                  render={({field}) => (
                    <FormItem className='flex-1'>
                      <FormLabel className='text-0875 font-bold text-greyscale-80 mb-[0.5rem]'>
                        Address *
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className='border-[2px] border-solid focus:border-orange-normal border-greyscale-5 focus:ring-transparent'>
                            <SelectValue
                              className='text-greyscale-10 text-0875 flex-1'
                              placeholder={
                                dataForm?.destination === '' &&
                                'Please Select Droff'
                              }
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className='min-w-[16rem] p-[1.25rem] rounded-[0.75rem] sahdow-[90px_128px_44px_0px_rgba(66,72,66,0.00),57px_82px_40px_0px_rgba(66,72,66,0.01),32px_46px_34px_0px_rgba(66,72,66,0.05),14px_20px_25px_0px_rgba(66,72,66,0.09),4px_5px_14px_0px_rgba(66,72,66,0.10)]'>
                          {dataDestination &&
                            dataDestination?.address?.map((e, index) => (
                              <>
                                <SelectItem
                                  key={index}
                                  className='*:text-[1rem] *:font-bold *:text-greyscale-80 hover:bg-[#f1f1f1] py-[1.12rem]'
                                  value={e}
                                >
                                  {e}
                                </SelectItem>
                                <hr className='w-full h-[0.0625rem] bg-[#f1f1f1]' />
                              </>
                            ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div
              className={`${
                isTourDetail && 'order-2'
              } w-full space-y-[0.75rem]`}
            >
              <div
                className={`${
                  isTourDetail && 'md:px-[1rem]'
                }flex flex-col py-[0.75rem] xmd:pt-[1.75rem] rounded-[0.5rem] bg-white`}
              >
                <div className='flex justify-between items-center'>
                  <span className='text-0875 text-greyscale-60 font-normal'>
                    4 days of self-driving
                  </span>
                  <div className='flex items-center'>
                    <span className='w-[3.3125rem] text-0875 font-bold text-greyscale-40'>
                      ${data?.paxValueSelf}
                    </span>
                    <div className='h-[1rem] w-[1px] bg-[#D9D9D9] mx-[0.5rem]'></div>
                    <div className='flex items-center py-[0.375rem] px-[0.75rem] rounded-[0.25rem] bg-greyscale-5'>
                      <span className='text-0875 text-greyscale-60'>Pax</span>
                      <span className='w-[1.25rem] text-0875 font-bold text-right text-orange-normal-hover'>
                        {paxValueSelf}
                      </span>
                      <div className='flex flex-col ml-[0.375rem]'>
                        <div
                          onClick={() => {
                            setPaxValueSelf(paxValueSelf + 1)
                          }}
                          className=''
                        >
                          <svg
                            className='w-[0.75rem]'
                            xmlns='http://www.w3.org/2000/svg'
                            width='12'
                            height='8'
                            viewBox='0 0 12 8'
                            fill='none'
                          >
                            <path
                              d='M6.00329 3.41525L2.38713 7.03125C2.20358 7.21498 1.97909 7.30664 1.71368 7.30664C1.4483 7.30664 1.22392 7.21496 1.04039 7.03125L0.482264 6.47331C0.298793 6.28986 0.207031 6.06534 0.207031 5.80004C0.207031 5.53474 0.298793 5.31032 0.482264 5.12659L5.32612 0.275364C5.50967 0.0917881 5.73413 2.41597e-07 5.99957 2.532e-07C6.265 2.64802e-07 6.48928 0.091762 6.67291 0.275364L11.5168 5.12656C11.7003 5.3103 11.7921 5.53468 11.7921 5.80001C11.7921 6.06534 11.7003 6.28984 11.5168 6.47328L10.9587 7.03123C10.7753 7.21496 10.5521 7.30662 10.289 7.30662C10.0262 7.30662 9.8005 7.21493 9.61202 7.03123L6.00329 3.41525Z'
                              fill='#727272'
                            />
                          </svg>
                        </div>
                        <div
                          onClick={() => {
                            if (paxValueSelf === 0) {
                              return
                            } else {
                              setPaxValueSelf(paxValueSelf - 1)
                            }
                          }}
                          className=''
                        >
                          <svg
                            className='w-[0.75rem]'
                            xmlns='http://www.w3.org/2000/svg'
                            width='12'
                            height='8'
                            viewBox='0 0 12 8'
                            fill='none'
                          >
                            <path
                              d='M6.00329 4.19803L2.38713 0.58203C2.20358 0.398298 1.97909 0.306641 1.71368 0.306641C1.4483 0.306641 1.22392 0.398324 1.04039 0.58203L0.482264 1.13998C0.298793 1.32342 0.207031 1.54794 0.207031 1.81324C0.207031 2.07855 0.298793 2.30296 0.482264 2.48669L5.32612 7.33792C5.50967 7.52149 5.73413 7.61328 5.99957 7.61328C6.265 7.61328 6.48928 7.52152 6.67291 7.33792L11.5168 2.48672C11.7003 2.30298 11.7921 2.0786 11.7921 1.81327C11.7921 1.54794 11.7003 1.32345 11.5168 1.14L10.9587 0.582056C10.7753 0.398324 10.5521 0.306666 10.289 0.306666C10.0262 0.306666 9.8005 0.39835 9.61202 0.582056L6.00329 4.19803Z'
                              fill='#727272'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {paxValueSelf === 0 && paxValueLocal === 0 && (
                  <div className='w-full flex justify-end text-075 text-red-600'>
                    Please select the number of people
                  </div>
                )}
                <hr
                  className={`${
                    isTourDetail ? 'w-[49.1875rem]' : 'w-[32.5rem]'
                  } h-[0.0625rem] my-[0.75rem]`}
                />
                <div className='flex justify-between items-center'>
                  <span className='text-0875 text-greyscale-60 font-normal '>
                    4 days with local driver
                  </span>
                  <div className='flex items-center'>
                    <span className='w-[3.3125rem] text-0875 font-bold text-greyscale-40'>
                      ${data?.paxValueLocal}
                    </span>
                    <div className='h-[1rem] w-[1px] bg-[#D9D9D9] mx-[0.5rem]'></div>
                    <div className='flex items-center py-[0.375rem] px-[0.75rem] rounded-[0.25rem] bg-greyscale-5'>
                      <span className='text-0875 text-greyscale-60'>Pax</span>
                      <span className='w-[1.25rem] text-0875 font-bold text-right text-orange-normal-hover'>
                        {paxValueLocal}
                      </span>
                      <div className='flex flex-col ml-[0.375rem]'>
                        <div
                          onClick={() => {
                            setPaxValueLocal(paxValueLocal + 1)
                          }}
                          className=''
                        >
                          <svg
                            className='w-[0.75rem]'
                            xmlns='http://www.w3.org/2000/svg'
                            width='12'
                            height='8'
                            viewBox='0 0 12 8'
                            fill='none'
                          >
                            <path
                              d='M6.00329 3.41525L2.38713 7.03125C2.20358 7.21498 1.97909 7.30664 1.71368 7.30664C1.4483 7.30664 1.22392 7.21496 1.04039 7.03125L0.482264 6.47331C0.298793 6.28986 0.207031 6.06534 0.207031 5.80004C0.207031 5.53474 0.298793 5.31032 0.482264 5.12659L5.32612 0.275364C5.50967 0.0917881 5.73413 2.41597e-07 5.99957 2.532e-07C6.265 2.64802e-07 6.48928 0.091762 6.67291 0.275364L11.5168 5.12656C11.7003 5.3103 11.7921 5.53468 11.7921 5.80001C11.7921 6.06534 11.7003 6.28984 11.5168 6.47328L10.9587 7.03123C10.7753 7.21496 10.5521 7.30662 10.289 7.30662C10.0262 7.30662 9.8005 7.21493 9.61202 7.03123L6.00329 3.41525Z'
                              fill='#727272'
                            />
                          </svg>
                        </div>
                        <div
                          onClick={() => {
                            if (paxValueLocal === 0) {
                              return
                            } else {
                              setPaxValueLocal(paxValueLocal - 1)
                            }
                          }}
                          className=''
                        >
                          <svg
                            className='w-[0.75rem]'
                            xmlns='http://www.w3.org/2000/svg'
                            width='12'
                            height='8'
                            viewBox='0 0 12 8'
                            fill='none'
                          >
                            <path
                              d='M6.00329 4.19803L2.38713 0.58203C2.20358 0.398298 1.97909 0.306641 1.71368 0.306641C1.4483 0.306641 1.22392 0.398324 1.04039 0.58203L0.482264 1.13998C0.298793 1.32342 0.207031 1.54794 0.207031 1.81324C0.207031 2.07855 0.298793 2.30296 0.482264 2.48669L5.32612 7.33792C5.50967 7.52149 5.73413 7.61328 5.99957 7.61328C6.265 7.61328 6.48928 7.52152 6.67291 7.33792L11.5168 2.48672C11.7003 2.30298 11.7921 2.0786 11.7921 1.81327C11.7921 1.54794 11.7003 1.32345 11.5168 1.14L10.9587 0.582056C10.7753 0.398324 10.5521 0.306666 10.289 0.306666C10.0262 0.306666 9.8005 0.39835 9.61202 0.582056L6.00329 4.19803Z'
                              fill='#727272'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {paxValueSelf === 0 && paxValueLocal === 0 && (
                  <div className='w-full flex justify-end text-075 text-red-600'>
                    Please select the number of people
                  </div>
                )}
                <hr
                  className={`${
                    isTourDetail ? 'w-[49.1875rem]' : 'w-[32.5rem]'
                  } h-[0.0625rem] my-[0.75rem]`}
                />
              </div>
              <div className='w-full flex justify-between items-center'>
                <span className='text-1 font-semibold text-[#551D0A]'>
                  TOTAL
                </span>
                <span className='w-[10.5625rem] py-[0.25rem] px-[0.5rem] rounded-[0.25rem] bg-greyscale-5 flex justify-center items-center text-125 font-bold text-greyscale-80'>
                  $
                  {paxValueSelf * data?.paxValueSelf +
                    paxValueLocal * data?.paxValueLocal}
                </span>
              </div>
            </div>
            <div
              className={`${
                isTourDetail
                  ? 'static order-4 xmd:absolute xmd:bottom-[0rem] xmd:left-0 xmd:!px-0'
                  : 'absolute md:top-[37.5rem] right-[1.5rem] xmd:absolute xmd:bottom-[0.75rem] xmd:left-0 xmd:px-[0.75rem] md:space-x-[0.5rem]'
              } xmd:flex-col w-[33.25rem] xmd:w-full flex xmd:space-y-[0.5rem]`}
            >
              <Button
                className={`${
                  isTourDetail && 'order-2 xmd:order-1 ml-[0.5rem] xmd:ml-0'
                } hover:bg-orange-normal-hover text-0875 font-extrabold text-white uppercase h-[3.5rem] py-[1rem] px-[2rem] flex-1 flex justify-center items-center rounded-[0.5rem] border-[1px] border-solid border-orange-normal-hover bg-orange-normal`}
                type='submit'
              >
                BOOK NOW, Pay later
                <svg
                  className='ml-[0.5rem]'
                  xmlns='http://www.w3.org/2000/svg'
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                >
                  <path
                    d='M10.125 6H0'
                    stroke='url(#paint0_linear_9604_2828)'
                    strokeWidth='2'
                  />
                  <g filter='url(#filter0_i_9604_2828)'>
                    <path
                      d='M12 6L6 11.25L8.41379 6L6 0.75L12 6Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <filter
                      id='filter0_i_9604_2828'
                      x='6'
                      y='0.75'
                      width='26'
                      height='14.5'
                      filterUnits='userSpaceOnUse'
                      colorInterpolationFilters='sRGB'
                    >
                      <feFlood
                        floodOpacity='0'
                        result='BackgroundImageFix'
                      />
                      <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='BackgroundImageFix'
                        result='shape'
                      />
                      <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset
                        dx='20'
                        dy='4'
                      />
                      <feGaussianBlur stdDeviation='50' />
                      <feComposite
                        in2='hardAlpha'
                        operator='arithmetic'
                        k2='-1'
                        k3='1'
                      />
                      <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0'
                      />
                      <feBlend
                        mode='normal'
                        in2='shape'
                        result='effect1_innerShadow_9604_2828'
                      />
                    </filter>
                    <linearGradient
                      id='paint0_linear_9604_2828'
                      x1='4.53912'
                      y1='6'
                      x2='4.53912'
                      y2='6.892'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop
                        offset='0.31'
                        stopColor='white'
                      />
                      <stop
                        offset='1'
                        stopColor='white'
                        stopOpacity='0'
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </Button>
              <Button
                className={`${
                  isTourDetail && 'order-1 xmd:order-2 w-[16.5625rem]'
                } hover:bg-orange-normal-hover hover:text-white text-0875 font-extrabold uppercase bg-white text-orange-normal-hover h-[3.5rem] py-[1rem] px-[2rem] flex-1 flex justify-center items-center rounded-[0.5rem] border-[1px] border-solid border-orange-normal-hover`}
                type='submit'
              >
                PAY NOW
              </Button>

              {isTourDetail && (
                <div className='ml-[0.5rem] flex items-center order-3 xmd:absolute xmd:bottom-[1rem] xmd:right-0'>
                  <svg
                    className='w-[2.1875rem] h-[1.37256rem]'
                    xmlns='http://www.w3.org/2000/svg'
                    width='35'
                    height='22'
                    viewBox='0 0 35 22'
                    fill='none'
                  >
                    <g clipPath='url(#clip0_8629_27961)'>
                      <path
                        opacity='0.07'
                        d='M32.2368 0.0195312H2.76316C1.19737 0.0195312 0 1.20907 0 2.76463V19.2352C0 20.7908 1.28947 21.9803 2.76316 21.9803H32.2368C33.8026 21.9803 35 20.7908 35 19.2352V2.76463C35 1.20907 33.7105 0.0195312 32.2368 0.0195312Z'
                        fill='black'
                      />
                      <path
                        d='M32.2377 0.933594C33.2508 0.933594 34.0798 1.75712 34.0798 2.76366V19.2342C34.0798 20.2408 33.2508 21.0643 32.2377 21.0643H2.76398C1.75082 21.0643 0.921875 20.2408 0.921875 19.2342V2.76366C0.921875 1.75712 1.75082 0.933594 2.76398 0.933594H32.2377Z'
                        fill='white'
                      />
                      <path
                        d='M26.066 9.26141H25.7897C25.4213 10.1764 25.1449 10.634 24.8686 12.0065H26.6186C26.3423 10.634 26.3423 9.99344 26.066 9.26141ZM28.737 14.6601H27.1713C27.0792 14.6601 27.0792 14.6601 26.987 14.5686L26.8028 13.7451L26.7107 13.5621H24.5002C24.4081 13.5621 24.316 13.5621 24.316 13.7451L24.0397 14.5686C24.0397 14.6601 23.9476 14.6601 23.9476 14.6601H22.0134L22.1976 14.2026L24.8686 7.98037C24.8686 7.52285 25.1449 7.33984 25.6055 7.33984H26.987C27.0792 7.33984 27.1713 7.33984 27.1713 7.52285L28.4607 13.4706C28.5528 13.8366 28.6449 14.1111 28.6449 14.4771C28.737 14.5686 28.737 14.5686 28.737 14.6601ZM16.3949 14.3856L16.7634 12.7385C16.8555 12.7385 16.9476 12.83 16.9476 12.83C17.5923 13.1045 18.237 13.2876 18.8818 13.1961C19.066 13.1961 19.3423 13.1045 19.5265 13.013C19.987 12.83 19.987 12.3725 19.6186 12.0065C19.4344 11.8235 19.1581 11.732 18.8818 11.549C18.5134 11.366 18.1449 11.183 17.8686 10.9085C16.7634 9.99344 17.1318 8.71239 17.7765 8.07187C18.3292 7.70586 18.6055 7.33984 19.3423 7.33984C20.4476 7.33984 21.6449 7.33984 22.1976 7.52285H22.2897C22.1976 8.07187 22.1055 8.52939 21.9213 9.07841C21.4607 8.8954 21.0002 8.71239 20.5397 8.71239C20.2634 8.71239 19.987 8.71239 19.7107 8.8039C19.5265 8.8039 19.4344 8.8954 19.3423 8.9869C19.1581 9.16991 19.1581 9.44442 19.3423 9.62743L19.8028 9.99344C20.1713 10.1764 20.5397 10.3595 20.816 10.5425C21.2765 10.817 21.737 11.2745 21.8292 11.8235C22.0134 12.647 21.737 13.3791 21.0002 13.9281C20.5397 14.2941 20.3555 14.4771 19.7107 14.4771C18.4213 14.4771 17.4081 14.5686 16.5792 14.2941C16.487 14.4771 16.487 14.4771 16.3949 14.3856ZM13.1713 14.6601C13.2634 14.0196 13.2634 14.0196 13.3555 13.7451C13.816 11.732 14.2765 9.62743 14.6449 7.61435C14.737 7.43135 14.737 7.33984 14.9213 7.33984H16.5792C16.3949 8.43788 16.2107 9.26141 15.9344 10.2679C15.6581 11.6405 15.3818 13.013 15.0134 14.3856C15.0134 14.5686 14.9213 14.5686 14.737 14.5686M4.60547 7.52285C4.60547 7.43135 4.78968 7.33984 4.88178 7.33984H8.01336C8.47389 7.33984 8.84231 7.61435 8.93442 8.07187L9.76336 12.098C9.76336 12.1895 9.76336 12.1895 9.85547 12.281C9.85547 12.1895 9.94757 12.1895 9.94757 12.1895L11.8818 7.52285C11.7897 7.43135 11.8818 7.33984 11.9739 7.33984H13.9081C13.9081 7.43135 13.9081 7.43135 13.816 7.52285L10.9607 14.2026C10.8686 14.3856 10.8686 14.4771 10.7765 14.5686C10.6844 14.6601 10.5002 14.5686 10.316 14.5686H8.93442C8.84231 14.5686 8.75021 14.5686 8.75021 14.3856L7.27652 8.71239C7.09231 8.52939 6.81599 8.25488 6.44757 8.16337C5.89494 7.88886 4.88178 7.70586 4.69757 7.70586L4.60547 7.52285Z'
                        fill='#142688'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_8629_27961'>
                        <rect
                          width='35'
                          height='21.9608'
                          fill='white'
                          transform='translate(0 0.0195312)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    className='w-[2.1875rem] h-[1.37256rem]'
                    xmlns='http://www.w3.org/2000/svg'
                    width='35'
                    height='22'
                    viewBox='0 0 35 22'
                    fill='none'
                  >
                    <g clipPath='url(#clip0_8629_27962)'>
                      <path
                        opacity='0.07'
                        d='M32.2368 0.0195312H2.76316C1.19737 0.0195312 0 1.20907 0 2.76463V19.2352C0 20.7908 1.28947 21.9803 2.76316 21.9803H32.2368C33.8026 21.9803 35 20.7908 35 19.2352V2.76463C35 1.20907 33.7105 0.0195312 32.2368 0.0195312Z'
                        fill='black'
                      />
                      <path
                        d='M32.2377 0.933594C33.2508 0.933594 34.0798 1.75712 34.0798 2.76366V19.2342C34.0798 20.2408 33.2508 21.0643 32.2377 21.0643H2.76398C1.75082 21.0643 0.921875 20.2408 0.921875 19.2342V2.76366C0.921875 1.75712 1.75082 0.933594 2.76398 0.933594H32.2377Z'
                        fill='white'
                      />
                      <path
                        d='M13.8146 17.4042C17.3753 17.4042 20.2619 14.5365 20.2619 10.999C20.2619 7.46147 17.3753 4.59375 13.8146 4.59375C10.2538 4.59375 7.36719 7.46147 7.36719 10.999C7.36719 14.5365 10.2538 17.4042 13.8146 17.4042Z'
                        fill='#EB001B'
                      />
                      <path
                        d='M21.1856 17.4042C24.7464 17.4042 27.633 14.5365 27.633 10.999C27.633 7.46147 24.7464 4.59375 21.1856 4.59375C17.6249 4.59375 14.7383 7.46147 14.7383 10.999C14.7383 14.5365 17.6249 17.4042 21.1856 17.4042Z'
                        fill='#F79E1B'
                      />
                      <path
                        d='M20.2646 11.0008C20.2646 8.80476 19.1593 6.8832 17.5014 5.78516C15.8435 6.9747 14.7383 8.89627 14.7383 11.0008C14.7383 13.1054 15.8435 15.1185 17.5014 16.2165C19.1593 15.1185 20.2646 13.1969 20.2646 11.0008Z'
                        fill='#FF5F00'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_8629_27962'>
                        <rect
                          width='35'
                          height='21.9608'
                          fill='white'
                          transform='translate(0 0.0195312)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              )}
            </div>
          </form>
        </Form>
        <InformationForm
          isTourDetail={isTourDetail}
          dataTourDetail={dataTourDetail}
          dataForm={dataForm}
          data={data}
          paxValueSelf={paxValueSelf}
          paxValueLocal={paxValueLocal}
        />
      </section>
      {isDialogOpen && (
        <div
          onClick={handleClickOutside}
          className='z-[999] fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2  size-full flex items-center justify-center bg-greyscale-60/70'
        >
          <div className='child_video overflow-hidden rounded-[1.5rem] h-[30.3125rem] w-[47.25rem] relative bg-[linear-gradient(0deg,rgba(19,52,28,0.60)_0%,rgba(19,52,28,0.60)_100%)]'>
            <Image
              className='size-full rounded-[1.5rem]'
              alt='successfully'
              src={'/imgs/successfully.jpg'}
              width={756}
              height={485}
            />
            <div className='flex flex-col absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 space-y-[3rem] items-center'>
              <span className='w-[21.8125rem] text-35 font-black text-[#FFF] text-center'>
                {isDialogText}
              </span>
              <Link
                href='/'
                className='flex items-center justify-center w-[13.4375rem] h-[3.5rem] py-[1rem] px-[2rem] rounded-[0.5rem] bg-[#DA4B19] border-[1px] border-solid border-[#DA4B19] text-0875 font-extrabold text-white'
              >
                Homepage
              </Link>
            </div>
            <Image
              id='may_ig'
              className='absolute z-10 bottom-0 h-[8.37rem] w-[82.50331rem] object-cover'
              alt='mây'
              src={'/imgs/may.png'}
              width={1320.053}
              height={659.181}
            />
          </div>
        </div>
      )}
    </>
  )
}
