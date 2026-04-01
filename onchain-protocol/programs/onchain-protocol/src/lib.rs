use anchor_lang::prelude::*;

declare_id!("hJeqb4efiNSvzFjDXy1nbc3yMxQ8wCe4iBxNn6BxBhf");

#[program]
pub mod onchain_protocol {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
