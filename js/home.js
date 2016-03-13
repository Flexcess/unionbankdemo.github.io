 $(function(){
     var map = {
                'Personal': ['Accounts', 'Retail Loans', 'Online Payments', 'Digital Banking', 'Cards', 'Insurance & Investment', 'Other Service', 'TVC'],
                'NRI': ['NRI Deposit', 'NRI Investments', 'NRI Remittances', 'NRI Loans', 'NRI FAQs'],
                'International': ['Exports', 'Imports', 'Remittances', 'Network', 'Other Services', 'Treasury', 'FAQs'],
                'Rural & Agri': ['Short Term Credit', 'Long Term Credit', 'Other Credit', 'CSR', 'Useful Information', 'RRB', 'Minority Welfare'],
                'Corporate' : ['Deposit Accounts', 'Credit', 'Loan Syndication & Advisory', 'Selected Treasury Products', 'Government Business', 'Other Services', 'Useful Information', 'FAQs'],
                'MSME': ['MSME Overview', 'MSME Policy', 'Credit', 'Schemes', 'Channel Finance', 'Special Scheme', 'Other Services', 'MSME Contact Points', 'Mudra', 'TVC'],
                'Financial Inclusion': ['Model For FI', 'Products for FI', 'Schemes Implemented', 'CSR', 'Useful Information'],
                'About Us': ['Profile', 'Joint Venture', 'Investor Relations', 'Policies & Codes', 'Training System', 'Careers', 'KYC', 'Risk Management', 'CSR', 'MISC'],
                'Govt. Business': ['Departmentalized Ministries Accounts', 'Government Savings Schemes', 'Tax Collection', 'Pension', 'Fund Management Solution'],
                'Investor Relations': ['Disclosures to Stock Exchange(s)', 'Shareholders Information', 'Financial Results', 'Annual Reports', 'Half Yearly Communicaions', 
                                        'General Meetings', 'Key Managerial Personnel', 'Investor Grievence Mechanism'],
                },
        l2_map = {
            'Personal_Accounts': {'Current Accounts': 'personal/RegularCurrentAccount.html',
                                    'Savings Accounts': 'personal/RegularSavingAccounts.html', 
                                    'Salary Accounts': 'personal/UnionSuperSalaryAccount.html', 
                                    'Recurring Deposit Scheme': 'personal/OrdinaryCumulativeDeposit.html',
                                    'Fixed Deposit Accounts': 'personal/FDAccounts.html',
                                    'Demat Accounts': 'personal/DematAccounts.html',
                                    'Online Trading Accounts': 'personal/OnlineTradingAccounts.html',
                                    'Useful Information': 'personal/UsefulInfo.html'},
                                    
                'Personal_Alternate Channel': {'ATMs': 'personal/',
                                            'Internet Banking':'personal/',
                                            'Mobile Banking': 'personal/',
                                            'SMS Banking': 'personal/',
                                            'Kisan ATM': 'personal/'},                      
                'Personal_Cards': {'Credit Cards': 'personal/CreditCard.html',
                                'Debit Cards': 'personal/DebitCard.html',
                                    'Gift Cards': 'personal/OtherCards.html',
                                    'Payroll Cards': 'personal/OtherCards.html',
                                    'Point of Sale terminal': 'personal/POSTerminal.html'},
                                                        
                'Govt. Business_Tax Collection': {'Direct Taxes': 'personal/DirectTaxes.html',
                                            'Indirect Taxes': 'personal/IndirectTaxes.html',
                                            'State Tax Collections': 'personal/StateTaxCollections.html',
                                            'New Pension Scheme 2009': 'personal/NewPensionScheme.html',
                                            'Govt. Deposit Scheme': 'personal/',
                                            'Pension': 'personal/CentralCivilPension.html',
                                            'Govt. Bonds': 'personal/',
                                            'Departmentalised Ministries Account': 'personal/'},
                                                
                'Personal_Insurance & Investment': {'Mutual Fund': 'personal/MutualFunds.html',
                                                    'Life Insurance': 'personal/LifeInsurance.html',
                                                    'General Insurance': 'personal/NonLifeInsurance.html',
                                                    'Union Demat': 'personal/DematAccounts.html',
                                                    'Online Trading Account': 'personal/OnlineTradingAccounts.html',
                                                    'ASBA Applications': 'personal/ASBA.html',
                                                    'Tax Saving Deposits': 'personal/PMSBY.html'},
                                                                        
                'Personal_Online Payments': {'Union Bill Pay': 'personal/UnionBillPayDesk.html',
                                            'Bill Pay Online': 'personal/UnionBillOnlinePay.html',
                                            'NEFT': 'personal/NEFT.html',
                                            'RTGS': 'personal/RTGS.html',
                                            'Online Tax Payment': 'personal/OnlineTaxPayment.html',
                                            'Donations': 'personal/Donations.html',
                                            'E-Ticketing KIOSK': 'personal/',
                                            'Online DGFT Payment': 'personal/ExchRateOthers.html'},
                                                                
                'Personal_Other Service': {'Other Service': 'personal/',
                                        'Collection Of Cheques': 'personal/',
                                        'Multi City Cheque Book': 'personal/',
                                        'Call Center 24*7': 'personal/'},
                                                                
                'Personal_Retail Loans': {'Home Loans': 'personal/',
                                        'Vehicle Loans': 'personal/',
                                        'Education Loan': 'personal/',
                                        'Loans Against Property': 'personal/',
                                        'Loans for Senior Citizens': 'personal/',
                                        'Personal Loan': 'personal/',
                                        'Loans for Medical Practitioners': 'personal/',
                                        'Loans For Pensioners': 'personal/',
                                        'Loans For Salary A/C Holders': 'personal/',
                                        'Tools': 'personal/'},
                'Personal_Digital Banking': {'Digi Purse': 'personal/',
                                            'Branch Imps': 'personal/',
                                            'Mobile Passbook': 'personal/',
                                            'ATMs': 'personal/ATM.html',
                                            'Talking ATMs': 'personal/',
                                            'Remittance @ATMs': 'personal/',
                                            'Internet Banking': 'personal/',
                                            'Mobile Banking': 'personal/',
                                            'SMS Banking': 'personal/',
                                            'KISAN ATM': 'personal/',
                                            'Self ATM PIN Generation Through IVR': 'personal/' },
                'NRI_NRI Deposit': {'Feature of NRI Deposits': 'personal/',
                                    'Savings Account': 'personal/',
                                    'Current Account': 'personal/',
                                    'Fixed Deposit[Rupees]': 'personal/',
                                    'Fixed Deposit[Foreign Currency]': 'personal/'},                                               
                'NRI_NRI Investments': {'Acquisition of Properties': 'personal/',
                                    'Portfolio Investment': 'personal/',
                                    'Non Resident Ordinary Account (NRO)': 'personal/',
                                    'Gold Coins': 'personal/'},
                'NRI_NRI Remittances': {'Union E-REMIT': 'personal/',
                                    'Correspondent Banks': 'personal/',
                                    'Tie Up with Exchange Houses': 'personal/',
                                    'Union Bill Pay': 'personal/',
                                    'Tax Payment': 'personal/',
                                    'Union Bullet[RTGS]': 'personal/'},
                'NRI_NRI Loans': {'Home Loans': 'personal/',
                                    'Foreign Currency Loan': 'personal/',
                                    'NRI FAQs': 'personal/'},
                'INTERNATIONAL_Exports': {'Preshipment Finance': 'personal/PackingCreditInRupees.html',
                                            'Postshipment Finance': 'personal/Postshipment.html',
                                            'Non-Fund Based Finance': 'personal/NonFundBasedFinance.html',
                                            'Others': 'personal/OtherFinance.html',
                                            'Online DGFT Payment': 'personal/OnlineDGFTPayment.html'},                
                'INTERNATIONAL_Remittances': {'E-REMIT': 'personal/'},                    
                'INTERNATIONAL_Network': {'Authorised Dealing Branches': 'personal/',
                                        'Correspondent Banks': 'personal/',
                                        'Overseas Branches': 'personal/'},
                'INTERNATIONAL_Other Services': {'Foreign Currency Loans': 'personal/',
                                                'Exchange Rate Feed Over Reuters': 'personal/ExchRateOthers.html',
                                                'Online DGFT Payment': 'personal/OnlineDGFTPayment.html',
                                                'ECGC Cover': 'personal/ECGCCover.html'},
                'INTERNATIONAL_Treasury': {'State of Art': 'personal/',
                                            'Infrastructure': 'personal/',
                                            'Products & Services': 'personal/',
                                            'Gold': 'personal/'},
                 'Financial Inclusion_Model For FI' : {'Introduction' : 'personal/FinancialInclusion.html'},
                 'Financial Inclusion_Products For FI' : {'Products for FI': 'personal/NoFrillsAccount.html'},
                 'Financial Inclusion_Schemes Implemented' : {'Union Adarsh Gram': 'personal/UnionAdarshGram.html',
                                                              'Financial Literacy (FLCC)': 'FLCC.html' },
                 'Financial Inclusion_CSR' : {'Village Knowledge Center': 'personal/VKC.html',
                                              'VKC Portal': 'personal/VKCPortal.html'  },
                 'Financial Inclusion_Useful Information' : {'Useful Information': '/pdf/RABD-Useful info-Villages with 2000 plus Population.pdf'},  
                 'MSME_MSME Overview' : { 'MSME Definition' : 'personal/MSMEDefinition.html',
                                          'Overall Scenario' : 'personal/MSMEScenario.html' },
                 'MSME_MSME Policy' : { 'MSME Definition' : 'personal/MSMEDefinition.html',
                                        'Code of Bank\'s Commitment' : 'personal/MSMEPolicyCode.html' },                                                                                                                                                                           
                 'MSME_Credit' : { 'Credit Disbursal Eligibility' : 'personal/MSMEEligibility.html',
                                   'Credit Disbursal Appraisal' : 'personal/MSMEAppraisal.html',
                                   'Credit Rating Procedure' : 'personal/MSMECreditRatingProcedure.html',
                                   'Credit Disbursal Margin' : 'personal/MSMEMargin.html',
                                   'Credit Disbursal Documentation' : 'personal/MSMEDocs.html',
                                   'Bank\'s Statistics' : 'personal/MSMEBankStats.html' },
                 'MSME_Schemes' : { 'Union High Pride' : 'personal/MSMEUnionHighPride.html',
                                    'Union SME Plus' : 'personal/MSMEUnionSMEPlus.html',
                                    'Union Support' : 'personal/MSMEUnionSupport.html',
                                    'Union Transport' : 'personal/MSMEUnionTransport.html',
                                    'Union Cyber' : 'personal/MSMEUnionCyber.html',
                                    'Generators Set' : 'personal/MSMEGeneratorsSet.html', 
                                    'Hosiery Unit' : 'personal/MSMEHosieryUnit.html',
                                    'LPG Autorickshaw' : 'personal/MSMELPGAutoRickshaw.html', 
                                    'Old Taxies' : 'personal/MSMEOldTaxies.html', },                                                                                     
        },
        count = 0,
        catStr = '';
                        
        for(var key in map){
            catStr += (count % 2 == 0) 
                        ? '<div class="row">'+                                   
                            '<div class="columns six center full">' +
                                '<div class="image text-center margin-top-l">'+
                                    '<img class="mainIcon" src="images/icons/personal_100.png" alt="">' +    
                                    '<div data-group="' + key + '" class="text-caps bgap-l lh-1">' +  key +'</div>' +
                                '</div>' +
                            '</div>'
                    :  '<div class="columns six center full">' +
                            '<div class="image text-center margin-top-l">'+
                                '<img class="mainIcon" src="images/icons/personal_100.png" alt="">' +    
                                '<div data-group="' + key + '" class="text-caps bgap-l  lh-1">' +  key +'</div>' +
                            '</div>' +
                        '</div>'+
                    '</div>' ;
            count++;
        }
        $('#navGrid').append(catStr);
        
        $('.nav-grid-icon .columns').click(function(){
            var parent = $(this).find('[data-group]').data('group'),
                val = map[parent],
                catL2 = {};
                                    
                $('.nav-grid-icon').hide("slide", { direction: "up" }, 500);
                setTimeout(function(){
                    var links = '<ul id="catL2" class="list-style-none margin-left margin-right">';
                    val.forEach(function(value, index){
                        console.log(val);
                        links += '<li class="margin-bottom-none border">'+
                                    '<h3 class="margin-left-s"><span class="inline-block" style="width:85%">' + value + '</span><span class="u-pull-right">'+
                                    '<img class="icon margin-right-s align-middle" src="images/icons/personal_100.png" alt=""><img class="caret-right margin-left margin-right align-middle" src="images/icons/caret_right_100.png" alt=""></span></h3>'
                                    +'<p></p>'                                        
                                +'</li>';
                    });
                    links += '</ul>';
                    $('.content').append(links);
                    $('#catL2').accordion({
                        active: false,
                        collapsible: true,
                        autoHeight: false,
                        navigation: true, 
                            beforeActivate: function( event, ui ) {
                                if( $(ui.newPanel).is(':empty')){
                                catL2 = l2_map[parent + '_' + ui.newHeader.text()];
                                var content = '';
                                for(var catL3 in catL2){
                                    console.log(catL3);
                                    var gapClass = catL3 == Object.keys(catL2)[Object.keys(catL2).length - 1] ? 
                                                '' : 'margin-bottom bgap-xl border-bottom margin-top-l ';
                                    content += '<div class="' + gapClass +'font-xxl"><a class="text-black" href="' + catL2[catL3] + '">' + catL3 + '</a></div>';
                                }
                                $(ui.newPanel).append(content);
                              }
                            }
                    });
                    $('.back-btn').text(parent + ' / Back').removeClass('hide')
                }, 500);            
    });
    
    $('.back-btn').click(function(){
        var $btn = $(this);
        
        $('#catL2').animate({ marginLeft: "-1000px", opacity: 0 }, 500, function(){
            $(this).remove();
            $btn.addClass('hide');
            $('.nav-grid-icon').show("slide", { direction: "up" }, 500);
        });
    });
    
    $(document).on('click', '#catL2 h3', function (e) {
        $(this).find('.caret-right').toggleClass('rotated-icon');
    }); 
});