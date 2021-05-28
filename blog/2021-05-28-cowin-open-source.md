---
id: cowin
title: How I fixed a bug in India's national vaccination system 
author: Bharat Kashyap
author_title: Engineer, SamagraX
author_url: https://www.linkedin.com/in/bharat-kashyap-india/
author_image_url: https://samagra-development.github.io/docs/img/blogbk.jpg
tags: [cowin, vaccine, certificate, engineering, government, open source, govt engineers, govOS]
---

> One line of code generated lakhs — possibly crores — of vaccination certificates with incorrect ages printed on them, and the power of open-source came in to find a fix

<!--truncate-->
***

In a capital city ravaged by the second wave of the pandemic and a household swept along with it, the 4th of May 2021 brought with it hope and relief in the form of a vaccination appointment.

Both of those had been hard to find in the preceding three weeks. During the first wave we had the privilege of looking at graphs and numbers with a sense of detachment; in the middle of April this year —the onset of the second wave — it became deeply personal. My family became pixels on a curve that was rapidly dwarfing last year’s peak, with no bend in sight.

The appointment, therefore, represented the possibility of a return to "normal", however fleeting. India had decided to extend its vaccination program to those in the 18-45 age-group only days earlier. The administration and management of this drive was being done through "CoWin" - a government portal where citizens could register and book slots, and on successful vaccination, generate digitally verifiable certificates.

With some persistence, and a bit of luck, I managed to writhe through crowds, albeit virtual, and book a slot. The first shot was had, and I generated my certificate of partial vaccination through a two-step process on the portal. All relatively smooth, except one issue: my age was printed incorrectly. <div style={{marginTop: '20px', marginBottom: '10px', textAlign: 'center'}}> ![](https://i.imgur.com/9ZwwAen.jpg)</div>
Having been wrongly aged by a year was too trivial a concern at the time - I was partially vaccinated, and CoWin had told me to check back twelve weeks later. 

Once the situation at home became a bit stable, though, I decided to dig deeper.
  
#### CoWin: Under the hood  
  
India's central vaccine administration and credentialing system is based, in large part, on an open-source project called "**DIVOC[^1]**" built and maintained by the eGovernments foundation[^6], offered under the MIT license. <div style={{marginTop: '20px', marginBottom: '10px', textAlign: 'center'}}> ![](https://lh6.googleusercontent.com/tfo5XrWeqFClDlezIOrtoXhohIwIg4jion7xC2IvK0u9IGA5DfvH5Byv4EYe2gKM2y48J2eIeXRfoF3ann2MWdSKFTHWfsrPcqfkFUueKbHyjy_juZz98boVaRtJNKOowd6yfIdP)</div>

[^1]: Dr. Pramod Varma is a Ph.D in Computer Science, CTO of EkStep Foundation, former Chief Architect at UIDAI, and also — fun-fact — a descendant of Raja Ravi Varma. [Here](https://youtu.be/Jf__XxfjAjI?t=759) he is presenting DIVOC and its system design.


What that essentially means is that it is free to use for anyone: be it small, private entities or massive ones like the Government of India. What that also means is that its code is freely available for anyone — including you and me — to access.

The adoption of "open-source" technology for government has not happened overnight in the country. The beginnings were made when *Aadhar*, a national unique identity project, demonstrated that it was possible to handle "India scale" without licensed,  proprietary products to hold it up. 

The transition has not been easy, and it is far from even being considered close to complete: selling software to government has long been the arena of international technology giants and consulting firms that remain difficult to dislodge, as 
the MIT Technology Review [^2] explains:

> No one gets fired for hiring Deloitte or IBM. And when vendors keep getting the same kind of work they’ve done badly, there’s no incentive for them not to build a shitty system. Government requests for proposals are often written so they only fit one or a few vendors. You might see a yes or no box for, “Vendor must have worked on a healthcare system that serves over 500,000 people.” I don’t care whether that system exists, I want to know whether people who have to use it hate it.

A recent, relevant example is "VAMS" — The Vaccine Administration Management System — built for the Centers for Disease Control and Prevention (CDC) of the US by Deloitte, as part of a $44 million no-bid contract. What the software does is trivial at best — it does not include certificate generation — and has been met largely with indifference or criticism, as the MIT Technology Review [^3], again, describes:

> Instead, “VAMS has become a cuss word,” Marshall Taylor, head of South Carolina’s health department, [told state lawmakers](https://www.greenvilleonline.com/story/news/health/2021/01/22/south-carolina-has-vaccinated-18-phase-1-a-populations/4244441001/) in January. He went on to describe how the system has badly hurt their immunization efforts so far. Faced with a string of problems and bugs, several states, including South Carolina, are choosing to hack together their own solutions, or pay for private systems instead.


### Open-source GovTech

Invariably, governments are reliant upon legacy software: technology that was purchased and installed decades ago, with costly annual maintenance contracts. To disrupt this is to attempt a notoriously difficult task of software archaeology, but there is a clear framework to evaluate its benefits:

- **Ownership**: The primary, and very significant, shift that open-source brings inside government technology departments is one of ownership: instead of vendors on whom all responsibility for failure can be pinned, they must step up and own their own software in letter and spirit. It necessitates the cultivation of expertise inside the government instead of it remaining perennially in the custody of those outside - people with no incentive to ever transfer it. 

- **Extensibility**: Ownership breeds extensibility.  Open-source software owned by the government can be suitably modified, extended and re-configured to adapt to additional use-cases without tedious contract renegotiations, or worse, additional tendering. 

- **Community**: 
As XKCD wryly depicts here, almost all of modern digital infrastructure is supported by <div style={{textAlign: 'center', marginTop: '10px', marginBottom: '10px'}}>![](https://imgs.xkcd.com/comics/dependency.png)</div> open-source software, maintained by communities of contributors. It is perhaps the most under-appreciated success of the internet: how so many people collaborate remotely to craft software for little monetary gain. For government technology, leveraging this aspect of open-source culture remains the most elusive. Countries like Singapore have taken strong strides to engage the community with their "GovTech" setup. 

A beginning was made by India's National eGovernance Division recently by launching its own version of GitHub called "OpenForge", but it remains far from being a vibrant repository of government software that it was envisaged to be.

A nascent GovTech ecosystem has emerged in India in the recent past: eGovernments, EkStep and  — my own organisation — [Samagra](https://tech.samagragovernance.in/), have made rapid strides in building open-source software rapidly deployable to state and national scale. Projects like [Sunbird](https://sunbird.org/) are notable examples. 

To engage the community is to be able to build features fast, and crucially, fix issues faster. Issues like an incorrect age being printed on millions of vaccination certificates. <div style={{marginTop: '20px', marginBottom: '10px', textAlign: 'center'}}>![](https://lh3.googleusercontent.com/LsI_bpWuzBWnH-OEAsu0kPLkKG2960eMNLu0WT5D2dS3lGJfLWVe4EJNIwJYggqdRbPWwM5k3cLuMVKuSqmGsKBr0-1TwNonGR1weOYSx1ACrpn-6ygx-LCm3Oa53GRato4Dq9cm)</div>

### Not just a number

Days after the appointment, I stumbled upon DIVOC's issue board to find an issue titled "Age is reflecting incorrect[^4]". As you'd expect, it rang a bell.A discussion was already underway; a few hours of looking into the code and some help from friends later, I was able to identify a solution. It was simply the matter of taking one's birth month into account, which the existing code had missed. A single-line fix.

I proposed it to the maintainers of the project, not entirely sure if a response would be received.

Within two days, additional members of the community chimed in to suggest alternate implementations, different potential sources of error. It was pointed out that this fix would work only for a certain proportion of users; nevertheless, it would be an improvement. A final fix was agreed upon, and the submission — the single-line fix — was merged into the main codebase. The next day, it was released. <div style={{marginTop: '20px', marginBottom: '10px', textAlign: 'center'}}> ![](https://lh6.googleusercontent.com/36tnsDJtcFQAvVbAr8UeRM69gdXi7vkJzHD3_2Oup2hR5oxmxKKd6Q7JMEiItJt2wssxouP6LxjgylwAkJg1o7IDjCsQMOF3FqBUONchsv-mnDD5yd_3KoRNXxpjMpI6xrzEjbVn)</div>

### The FOSS way forward
  
Software written for population scale in India is rapidly following this lead: the best traditions of free and open-source software (FOSS) are being leveraged to create software robust enough to withstand scrutiny and gracious enough to accept contributions that can improve efficiency, and solve issues of any scale. From critical bugs that affect performance and optimise efficiency to relatively minor ones that result in millions of incorrect certificates. 

Not anymore, hopefully. 
  
[^2]: [*Why is it so hard to build government technology?*](https://www.technologyreview.com/2021/03/17/1020811/better-tech-government-pandemic-united-states/) (March 2021)


[^3]: [*What went wrong with America's $44 million vaccine data system?*](https://www.technologyreview.com/2021/01/30/1017086/cdc-44-million-vaccine-data-vams-problems/)(Jan 2021)

[^4]: [*Age is reflecting incorrect*](https://github.com/egovernments/DIVOC/issues/546)", GitHub Issue #546, DIVOC

[^5]: AarogyaSetu is India's national contract-tracing app for Covid-19. Its code was [made public](https://pib.gov.in/PressReleasePage.aspx?PRID=1668194) after social media outrage over the lack of transparency over its development.
[^6]: [Digital Infrastructure for Vaccination Open Credentialing](https://divoc.egov.org.in/) 
  
